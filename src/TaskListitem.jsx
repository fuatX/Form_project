import TaskListIcon from "./TaskListIcon";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";

export default function TaskListItem({ task, editTask, removeTask, doneTask }) {
  return (
    <li
      className={`list-group-item ${task.isDone && "bg-success bg-opacity-50"}`}
    >
      {task.priority && (
        <span className="badge p-1 text-dark me-2 rounded-circle ">
          <TaskListIcon />
        </span>
      )}
      {task.task}
      <div className="btn-group float-end" role="group">
        <button
          onClick={() => doneTask(task.uuid)}
          type="button "
          className="btn btn-sm btn-success"
        >
          <MdOutlineDoneOutline size={21} />
          Bitti
        </button>
        <button
          onClick={() => editTask(task.uuid)}
          type="button "
          className="btn btn-sm btn-info"
        >
          <CiEdit size={21} />
          Düzenle
        </button>
        <button
          onClick={() => removeTask(task.uuid)}
          type="button "
          className="btn btn-sm  btn-danger"
        >
          <MdDeleteOutline size={21} />
          Sil
        </button>
      </div>
    </li>
  );
}
