import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";

interface Props {
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ onClose = () => {}, children }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
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

        {/* Dialog Content */}
        <div className="dialog-content">
          <Dialog.Panel className="dialog-panel">
            {children}
          </Dialog.Panel>
        </div>

    </Dialog>
  );
}