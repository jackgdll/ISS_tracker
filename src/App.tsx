import { createTheme, ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import { TimeControls } from "./components/TimeControls";
import { RootState } from "./state/store";

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
        <TimeControls />
        {error ? <h1>{error}</h1> : <Map />}
      </div>
    </ThemeProvider>
  );
}

export default App;
