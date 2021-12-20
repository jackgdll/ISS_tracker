import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import { TimeControls } from "./components/TimeControls";
import { appendToPolyLine, fetchISSRequest } from "./state/actionCreators";
import { useAppDispatch } from "./state/hooks";
import { RootState } from "./state/store";
import { last } from "./utils";

function App() {
  const { loading, data, error } = useSelector((state: RootState) => state.iss);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <TimeControls />
      {error ? <h1>{error}</h1> : <Map />}
    </div>
  );
}

export default App;
