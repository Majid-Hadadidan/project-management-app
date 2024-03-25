import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex gap-4 my-4  justify-end items-center">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button className="py-2 px-6 text-stone-50 bg-stone-800 rounded-md hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="title" />
        <Input label="description" textArea />
        <Input label="duedate" />
      </div>
    </div>
  );
}
