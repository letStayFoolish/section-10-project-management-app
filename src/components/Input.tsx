import React, {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps &
  TextAreaProps & {
    label: string;
    isTextArea?: boolean;
  };

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement | HTMLTextAreaElement,
  Props
> = ({ label, isTextArea, ...props }, ref) => {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p>
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={classes}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          {...props}
          className={classes}
        />
      )}
    </p>
  );
};

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
