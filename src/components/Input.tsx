import React from "react";

type Props = {
  label: string;
  isTextArea?: boolean;
};

const Input: React.FC<Props> = ({ label, isTextArea, ...props }) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea className={classes} {...props} />
      ) : (
        <input {...props} className={classes} />
      )}
    </p>
  );
};

export default Input;
