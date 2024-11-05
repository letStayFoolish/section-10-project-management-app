import React, { ChangeEvent, useRef, useState } from "react";
import { ModalRef } from "../types";
import Modal from "./Modal.tsx";

type Props = {
  onAdd: (taskName: string) => void;
};

const NewTask: React.FC<Props> = ({ onAdd }) => {
  const modalRef = useRef<ModalRef>(null);
  const [enteredTask, setEnteredTask] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredTask(e.target.value);
  };

  const handleAddTask = () => {
    if (!enteredTask || enteredTask.trim() === "") {
      modalRef?.current?.openModal();
      return;
    }

    onAdd(enteredTask);
    // clear input fields
    setEnteredTask("");
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops...Looks like you forgot to enter a value.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Add a new task..."
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          value={enteredTask}
          onChange={handleOnChange}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
