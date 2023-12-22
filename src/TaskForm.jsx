import { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
  const emptyForm = {
    task: "",
    priority: false,
  };
  const [formData, setFormData] = useState(emptyForm);
  const [tasks, setTasks] = useState([]);

  function removeTask(uuid) {
    setTasks((prev) => prev.filter((item) => item.uuid !== uuid));
  }

  function editTask(uuid) {
    console.log(uuid);
    const task = tasks.find((item) => item.uuid === uuid);
    console.log(task);
    setFormData(task);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (formData.task.length > 3) {
      formData.uuid = uuidv4();
      setTasks((prev) => [formData, ...prev]); // form data en sona yada en başa
      setFormData(emptyForm);
      event.target.reset();
      // console.log(tasks);
    }
  }

  function handleInputChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      };
    });
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <label htmlFor="task" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="task"
              name="task"
              onChange={handleInputChange}
              value={formData.task}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="priority"
                name="priority"
                onChange={handleInputChange}
                checked={formData.priority}
              />
              <label className="form-check-label" htmlFor="priority">
                Oncelikli
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </div>
      </form>
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </>
  );
}
