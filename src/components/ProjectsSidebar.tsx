import React from "react";
import Button from "./Button.tsx";
import { ProjectType } from "../types";

type Props = {
  onCreateNewProject: () => void;
  projectList: ProjectType[];
  onSelectProject: (projectId: number) => void;
  selectedProject: ProjectType | undefined;
};

const ProjectsSidebar: React.FC<Props> = ({
  onCreateNewProject,
  projectList,
  onSelectProject,
  selectedProject,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onCreateNewProject}>+ Create Project</Button>
      </div>
      <ul className="mt-8">
        {/*  Dynamic expression  */}
        {projectList &&
          projectList.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if (selectedProject && project.id === selectedProject.id) {
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
};

export default ProjectsSidebar;
