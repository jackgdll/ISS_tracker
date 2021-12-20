import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Map from "./components/Map";
import { appendToPolyLine, fetchISSRequest } from "./state/actionCreators";
import { useAppDispatch } from "./state/hooks";
import { RootState } from "./state/reducers";
import { last } from "./utils";

const TEN_SECONDS_MS = 10000;

function App() {
  const dispatch = useAppDispatch();
  const { loading, data, error } = useSelector((state: RootState) => state.iss);
  const polyLine = useSelector((state: RootState) => state.polyLine);

  useEffect(() => {
    dispatch(fetchISSRequest());
    const interval = setInterval(() => {
      dispatch(fetchISSRequest());
    }, TEN_SECONDS_MS);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    console.log('loading: ' + loading);
    if (!error && !loading) {
      const position = last(data)?.iss_position;
      if (position) {
        dispatch(appendToPolyLine(position));
      }
    }
  }, [data, dispatch, error, loading]);

  return (
    <Map loading data={last(data)} polyLine={polyLine} />
  );
}

export default App;
