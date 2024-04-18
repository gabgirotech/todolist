"use client";

import { useState } from "react";
import TaskList from "../task-list";

interface StateProps {}

const State: React.FC<StateProps> = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <>
      <TaskList tasks={tasks} setTask={setTasks} />
      <button onClick={() => setTasks([...tasks, `Task ${tasks.length + 1}`])}>
        Add task
      </button>
    </>
  );
};

export default State;
