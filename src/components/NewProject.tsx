import React, { useRef } from "react";
import ForwardedInput from "./Input.tsx";
import type { ProjectType } from "../types";

type Props = {
  onAdd: (projectData: ProjectType) => void;
};

const NewProject: React.FC<Props> = ({ onAdd }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);

  const handleOnSave = () => {
    const enteredTitle = titleRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    const id = Math.random();

    // validation ...

    if (!enteredTitle || !enteredDescription || !enteredDueDate) return;

    const newProject: ProjectType = {
      id,
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    onAdd(newProject);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
  );
};

export default NewProject;
