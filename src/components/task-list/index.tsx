import Button from "../button";

interface TaskListProps {
  tasks: string[];
  setTask: (tasks: string[]) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTask }) => {
  const removeTask = (idx: number) => {
    const filteredTasks = tasks.filter((_task, i) => i !== idx);

    setTask(filteredTasks);
  };

  return tasks.map((task, i) => (
    <>
      <div key={`${task}${i}`}>{task}</div>
      <Button handleClick={() => removeTask(i)} />
    </>
  ));
};

export default TaskList;
