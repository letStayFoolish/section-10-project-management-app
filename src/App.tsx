import { useState } from "react";
import ProjectsSidebar from "./components/ProjectsSidebar.tsx";
import NoProjectSelected from "./components/NoProjectSelected.tsx";
import NewProject from "./components/NewProject.tsx";
import { ProjectState, ProjectType, TaskType } from "./types";
import SelectedProject from "./components/SelectedProject.tsx";

const initialState: ProjectState = {
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
};

function App() {
  const [projectsState, setProjectsState] =
    useState<ProjectState>(initialState);

  const handleAddTask = (taskName: string) => {
    if (!selectedProject?.id) return;

    setProjectsState((prevState) => {
      const taskId = Math.random();

      const newTask: TaskType = {
        id: taskId,
        projectId: selectedProject.id,
        name: taskName,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (taskId: number) => {
    setProjectsState((prevState) => {
      const filteredTasks = prevState.tasks.filter(
        (task) => task.id !== taskId,
      );

      return {
        ...prevState,
        tasks: filteredTasks,
      };
    });
  };

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

  const handleOnCancel = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (projectId: number) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId,
      };
    });
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== projectsState.selectedProjectId,
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  const selectedProjectTasks = projectsState.tasks.filter(
    (task) => task.projectId === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject
      tasks={selectedProjectTasks}
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddNewProject} onCancel={handleOnCancel} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleStartAddNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onCreateNewProject={handleStartAddNewProject}
        projectList={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProject={selectedProject}
      />
      {content}
    </main>
  );
}

export default App;
