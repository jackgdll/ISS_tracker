import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import { TimeControls } from "./components/TimeControls";
import { RootState } from "./state/store";
import iss from "./assets/iss_white.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
  },
});

function App() {
  const { error } = useSelector((state: RootState) => state.iss);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: "100vw", height: "100vh" }}>
        <div className="pannel">
          <div className="title">
            <img
              alt="ISS Logo"
              src={iss}
              style={{
                height: "40px",
                alignSelf: "center",
                marginRight: "8px",
              }}
            />
            <h2>ISS Tracker</h2>
          </div>
          <TimeControls />
          <div style={{flex: 1}} />
        </div>
        {error ? <h1>{error}</h1> : <Map />}
      </div>
    </ThemeProvider>
  );
}

export default App;
