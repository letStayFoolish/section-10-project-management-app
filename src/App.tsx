import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.tsx";
import NoProjectSelected from "./components/NoProjectSelected.tsx";
import NewProject from "./components/NewProject.tsx";
import type { ProjectState, ProjectType } from "./types";

function App() {
  const [projectsState, setProjectsState] = useState<ProjectState>({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddNewProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddNewProject = (projectData: Omit<ProjectType, "id">) => {
    const projectId = Math.random();

    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddNewProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleStartAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onCreateNewProject={handleStartAddNewProject}
        projectList={projectsState.projects}
      />
      {content}
    </main>
  );
}

export default App;
