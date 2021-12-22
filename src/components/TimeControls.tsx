import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useAppDispatch } from "../state/hooks";
import {
  clearPolyLine,
  timeControlBackward,
  timeControlForward,
  timeControlReset,
} from "../state/actionCreators";
import { formatTimestamp, last } from "../utils";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {
  SkipPrevious,
  PlayArrow,
  SkipNext,
  Refresh,
} from "@mui/icons-material";

interface Props {
  onClick?: any;
  tooltip: string;
}

const ControlIcon: React.FC<Props> = ({ children, onClick, tooltip }) => {
  return (
    <Tooltip title={tooltip}>
      <IconButton size="large" onClick={onClick}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export const TimeControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const { live, data: currentData } = useSelector(
    (state: RootState) => state.timeControl
  );
  const { data } = useSelector((state: RootState) => state.iss);

  return (
    <div className="pannel">
      <div>
        <ControlIcon
          onClick={
            !data ? undefined : () => dispatch(timeControlBackward({ data }))
          }
          tooltip="Step Back in Time"
        >
          <SkipPrevious
            color={
              !data || currentData?.timestamp === data[0]?.timestamp
                ? "disabled"
                : "primary"
            }
          />
        </ControlIcon>

        <ControlIcon
          onClick={!data ? undefined : () => dispatch(timeControlReset())}
          tooltip="Live Feed"
        >
          <PlayArrow color={!data || live ? "disabled" : "primary"} />
        </ControlIcon>
        <ControlIcon
          onClick={
            !data ? undefined : () => dispatch(timeControlForward({ data }))
          }
          tooltip="Step Forward in Time"
        >
          <SkipNext color={!data || live ? "disabled" : "primary"} />
        </ControlIcon>
        <ControlIcon
          onClick={() => dispatch(clearPolyLine())}
          tooltip="Reset Trail"
        >
          <Refresh color="primary" />
        </ControlIcon>
      </div>
      <div style={{ alignSelf: "center" }}>
        {formatTimestamp(
          currentData ? currentData.timestamp : last(data)?.timestamp
        )}
      </div>
    </div>
  );
};
