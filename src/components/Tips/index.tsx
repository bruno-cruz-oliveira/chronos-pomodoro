import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Focus for {state.config.workTime}min</span>,
    shortBreakTime: <span>Rest for {state.config.shortBreakTime}min</span>,
    longBreakTime: <span>Long break</span>,
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        The next cycle is <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>The next oversight is from {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: <span>The next break will be a long one</span>,
  };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}

export default Tips;
