import React, {
  forwardRef,
  PropsWithChildren,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import { ModalRef, ModalRefMethods } from "../types";
import Button from "./Button.tsx";

const Modal: React.ForwardRefRenderFunction<
  ModalRefMethods,
  PropsWithChildren & { buttonCaption: string }
> = ({ children, buttonCaption, ...props }, ref) => {
  const dialogRef = useRef<ModalRef>(null);

  // To expose a function from outside, to can be called from this function component, we use useImperativeHandle() hook:
  useImperativeHandle(ref, () => {
    return {
      closeModal() {
        dialogRef.current?.close();
      },
      openModal() {
        dialogRef.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogRef}
      {...props}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!,
  );
};

const ModalWIthRef = forwardRef(Modal);

export default ModalWIthRef;
