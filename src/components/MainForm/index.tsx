import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import DefaultInput from "../DefaultInput";
import DefaultButton from "../DefaultButton";
import Cycles from "../Cycles";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import Tips from "../Tips";
import { showMessage } from "../../adapters/showMessage";

function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      showMessage.warn("Enter the name of the task");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
    showMessage.success("Task started!");
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.error("Task interrupted!");
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            aria-label="Start new task"
            title="Start new task"
            type="submit"
            icon={<PlayCircleIcon />}
            key="button_submit"
          />
        )}

        {!!state.activeTask && (
          <DefaultButton
            aria-label="Stop current task"
            title="Stop current task"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            key="button"
          />
        )}
      </div>
    </form>
  );
}

export default MainForm;
