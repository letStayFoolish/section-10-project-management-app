export type ProjectState = {
  selectedProjectId: number | undefined | null;
  projects: ProjectType[];
  tasks: TaskType[];
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
};

export type TaskType = {
  id: number;
  projectId: number;
  name: string;
};

export type ModalRef = HTMLDialogElement & ModalRefMethods;

export type ModalRefMethods = {
  closeModal: () => void;
  openModal: () => void;
};
