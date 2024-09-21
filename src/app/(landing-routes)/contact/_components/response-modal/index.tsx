import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@strategic-dot/components";
import React from "react";

interface ResponseModalProps {
  isOpen: boolean;
  onClose: () => void;
  responseMessage: string; // Dynamic message passed to the modal
  isError: boolean; // To determine if the message is an error or success
}

const ResponseModal: React.FC<ResponseModalProps> = ({
  isOpen,
  onClose,
  responseMessage,
  isError,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={isError ? "text-red-600" : "text-green-600"}>
            {isError ? "Error!" : "Success!"}
          </DialogTitle>
        </DialogHeader>
        <p className={isError ? "text-red-600" : "text-green-600"}>
          {responseMessage}
        </p>
        <DialogFooter>
          <button
            className={`mt-4 rounded px-4 py-2 text-white ${
              isError ? "bg-red-600" : "bg-mid-blue"
            }`}
            onClick={onClose}
          >
            Close
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResponseModal;
