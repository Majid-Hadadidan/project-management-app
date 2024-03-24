export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200 ">
        Your Project
      </h2>
      <div>
        <button className="px-4 py-2 rounded-md text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 ">+ Add Project</button>
      </div>
      <ul>
        <li>project1</li>
        <li>project2</li>
      </ul>
    </aside>
  );
}
