import React from "react";

import noProjectImage from "../assets/no-projects.png";
import Button from "./Button.tsx";

type Props = {
  onAddNewProject: () => void;
};

const NoProjectSelected: React.FC<Props> = ({ onAddNewProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="mx-auto w-16 h-16 object-contain"
        src={noProjectImage}
        alt="an empty task list"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new project
      </p>
      <p className="mt-8">
        <Button onClick={onAddNewProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
