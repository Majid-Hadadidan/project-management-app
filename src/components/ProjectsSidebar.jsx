import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  console.log(selectedProjectId);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900  text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200 ">
        Your Project
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {/* map selected project  */}
        {projects.map((project) => {
          //changing selected project style
          let cssClasses =
            "w-full my-1 text-left rounded-sm font-bold px-2 py-1 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
