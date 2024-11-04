export type ProjectState = {
  selectedProjectId: number | undefined | null;
  projects: ProjectType[];
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};
