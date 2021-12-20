import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import { TimeControls } from "./components/TimeControls";
import { appendToPolyLine, fetchISSRequest } from "./state/actionCreators";
import { useAppDispatch } from "./state/hooks";
import { RootState } from "./state/store";
import { last } from "./utils";

const TEN_SECONDS_MS = 10000 / 3;

function App() {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.iss);

  useEffect(() => {
    dispatch(fetchISSRequest());
    const interval = setInterval(() => {
      dispatch(fetchISSRequest());
    }, TEN_SECONDS_MS);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (!error && !loading) {
      const position = last(data)?.iss_position;
      if (position) {
        dispatch(appendToPolyLine(position));
      }
    }
  }, [data, dispatch, error, loading]);

  return (
    <>
      <TimeControls />
      {error ? <h1>{error}</h1> : <Map />}
    </>
  );
}

export default App;
