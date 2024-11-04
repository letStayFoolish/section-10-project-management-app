export type ProjectState = {
  selectedProjectId: string | undefined | null;
  projects: ProjectType[];
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};
