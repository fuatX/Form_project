import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import TaskListItem from "./TaskListitem";

export default function TaskList({ tasks, removeTask, editTask, doneTask }) {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  function handlePriorityFilter() {
    const newPriority = !priority;
    newPriority
      ? setFilteredTasks(tasks.filter((item) => item.priority === newPriority))
      : setFilteredTasks(tasks);

    setPriority(newPriority);
    console.log("priority", priority);
  }

  /*useEffect(()=>{ // func caliscak...},[eger array bos ise ilk comp yüklenince anlamina gelir.])?*/

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  if (tasks.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <h4 className="h4 mb-3">
          Gorevler:
          <button
            onClick={handlePriorityFilter}
            className={`btn btn-sm ${
              !priority ? "btn-warning" : "btn-secondary"
            } float-end`}
          >
            {priority ? "Hepsini Göster" : "Onceliklileri Göster"}
          </button>
        </h4>
        <ul className="list-group">
          {filteredTasks.map((task) => (
            <TaskListItem
              key={task.uuid}
              task={task}
              editTask={editTask}
              removeTask={removeTask}
              doneTask={doneTask}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
