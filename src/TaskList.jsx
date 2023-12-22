export default function TaskList({ tasks, removeTask }) {
  if (tasks.length === 0) {
    return <></>;
  }
  return (
    <>
      <h3 className="lead">Gorevler</h3>
      <ul className="list-group my-3">
        {tasks.map((item) => (
          <li className="list-group-item" key={item.uuid}>
            {item.task}
            <span
              onClick={() => removeTask(item.uuid)}
              className="btn btn-sm btn-danger float-end"
            >
              Sil
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
