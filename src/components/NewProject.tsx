import React, { useRef } from "react";
import ForwardedInput from "./Input.tsx";
import type { ModalRef, ProjectType } from "../types";
import Modal from "./Modal.tsx";

type Props = {
  onAdd: (projectData: Omit<ProjectType, "id">) => void;
  onCancel: () => void;
};

const NewProject: React.FC<Props> = ({ onAdd, onCancel }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const modalRef = useRef<ModalRef>(null);

  const handleOnSave = () => {
    const enteredTitle = titleRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    if (
      !enteredTitle ||
      enteredTitle?.trim() === "" ||
      !enteredDescription ||
      enteredDescription.trim() === "" ||
      !enteredDueDate ||
      enteredDueDate?.trim() === ""
    ) {
      modalRef.current?.openModal();
      return;
    }

    const newProject: Omit<ProjectType, "id"> = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onAdd(newProject);
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure that you provide a valid value for every input field.
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleOnSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <ForwardedInput type="text" ref={titleRef} label="Title" />
          <ForwardedInput ref={descriptionRef} label="Description" isTextArea />
          <ForwardedInput type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
