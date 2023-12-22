import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

export default function TaskList({ tasks, removeTask, editTask }) {
  if (tasks.length === 0) {
    return <></>;
  }
  return (
    <>
      <div className="p-4 bg-light mb-5 border rounded">
        <h3 className="h3">Gorevler</h3>
        <ul className="list-group">
          {tasks.map((item) => (
            <li className="list-group-item" key={item.uuid}>
              {item.task}
              <div className="btn-group float-end" role="group">
                <button
                  onClick={() => editTask(item.uuid)}
                  type="button "
                  className="btn btn-sm btn-info"
                >
                  <CiEdit size={21} />
                  Düzenle
                </button>
                <button
                  onClick={() => removeTask(item.uuid)}
                  type="button "
                  className="btn btn-sm  btn-danger"
                >
                  <MdDeleteOutline size={21} />
                  Sil
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
