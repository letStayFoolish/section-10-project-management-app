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

export type ModalRef = HTMLDialogElement & ModalRefMethods;

export type ModalRefMethods = {
  closeModal: () => void;
  openModal: () => void;
};
