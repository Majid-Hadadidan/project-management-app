import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleTask(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className="flex items-center gap-4  my-4">
      <input
        value={enteredTask}
        onChange={handleTask}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 focus:outline-none "
      />
      <button
        onClick={handleClick}
        className="px-4 py-1 bg-stone-900 text-stone-200 rounded hover:text-stone-100 hover:bg-stone-700 "
      >
        Add Task
      </button>
    </div>
  );
}
