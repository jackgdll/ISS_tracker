import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { MdPlayArrow, MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { useAppDispatch } from "../state/hooks";
import {
  timeControlBackward,
  timeControlForward,
  timeControlReset,
} from "../state/actionCreators";

export const TimeControls = () => {
  const dispatch = useAppDispatch();
  const { live, data: currentData } = useSelector(
    (state: RootState) => state.timeControl
  );
  const { loading, data, error } = useSelector((state: RootState) => state.iss);

  return (
    <div className="pannel">
      <MdSkipPrevious
        size={30}
        onClick={() => dispatch(timeControlBackward({ data }))}
      />
      {live ? (
        <></>
      ) : (
        <MdPlayArrow size={30} onClick={() => dispatch(timeControlReset())} />
      )}
      <MdSkipNext
        size={30}
        onClick={() => dispatch(timeControlForward({ data }))}
      />
    </div>
  );
};
