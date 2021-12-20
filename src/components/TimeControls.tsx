import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  MdPlayArrow,
  MdRefresh,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";
import { useAppDispatch } from "../state/hooks";
import {
  clearPolyLine,
  timeControlBackward,
  timeControlForward,
  timeControlReset,
} from "../state/actionCreators";
import { formatTimestamp, last } from "../utils";

export const TimeControls = () => {
  const dispatch = useAppDispatch();
  const { live, data: currentData } = useSelector(
    (state: RootState) => state.timeControl
  );
  const { loading, data, error } = useSelector((state: RootState) => state.iss);

  return (
    <div className="pannel">
      <div>
        <MdSkipPrevious
          size={30}
          color={
            currentData?.timestamp === data[0]?.timestamp ? "#999" : "#FFF"
          }
          onClick={() => dispatch(timeControlBackward({ data }))}
        />
        <MdPlayArrow
          size={30}
          color={live ? "#999" : "#FFF"}
          onClick={() => dispatch(timeControlReset())}
        />
        <MdSkipNext
          size={30}
          color={live ? "#999" : "#FFF"}
          onClick={() => dispatch(timeControlForward({ data }))}
        />
        <MdRefresh size={30} onClick={() => dispatch(clearPolyLine())} />
      </div>
      <div style={{alignSelf: 'center'}}>
        {formatTimestamp(
          currentData ? currentData.timestamp : last(data)?.timestamp
        )}
      </div>
    </div>
  );
};
