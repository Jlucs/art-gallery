import { Dialog, Transition } from "@headlessui/react";
import { useRef, useState, Fragment } from "react";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose = () => {}, children }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Transition show={true} as={Fragment}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0">
    <Dialog 
      as="div"
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="image-modal dialog fixed inset-0 flex items-center justify-center"
    >
         {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="dialog-exit" aria-hidden="true" ref={overlayRef}></div>

        <div className="dialog-backdrop"></div>

        <div className="dialog-close">
          <div className="close-btn"></div>
        </div>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
        {/* Dialog Content */}
        <div className="dialog-content">
          <Dialog.Panel className="dialog-panel">
            {children}
          </Dialog.Panel>
        </div>
        </Transition.Child>
    </Dialog>
    </Transition>
  );
}