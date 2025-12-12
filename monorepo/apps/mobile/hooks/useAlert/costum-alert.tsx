import { createContext, useContext, useState } from "react";

import { AlertModal } from "@/core/components/alert-modal";
import { ToastContainer } from "@/core/components/toast";
import { AlertContexType, ModalProps, ToastProps } from "@/types/ui";

const AlertContex = createContext<AlertContexType | undefined>(undefined);

export const useAlert = (): AlertContexType => {
  const contex = useContext(AlertContex);
  if (!contex) throw new Error("useAlert must be used within an AlertProvider");
  return contex;
};

export const AlertProvinder = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalProps | null>(null);
  const [resolver, setResolver] = useState<(res: boolean) => void>();
  const [toastData, setToastData] = useState<ToastProps | null>(null);

  const toastAlert = ({ message, title, icon, onVoid }: ToastProps) => {
    setToastData({ message, title, icon, onVoid });

    setTimeout(() => {
      setToastData(null);
      onVoid?.();
    }, 3000);
  };

  const showModal = (p: ModalProps) => {
    setModal(p);
  };

  const confirm = (p: ModalProps): Promise<boolean> => {
    setModal(p);
    return new Promise((resolve) => {
      setResolver(() => resolve);
    });
  };

  const handleConfirm = () => {
    modal?.onConfirm?.();
    setModal(null);
    resolver?.(true);
  };
  const handleCancel = () => {
    modal?.onClose?.();
    setModal(null);
    resolver?.(true);
  };

  return (
    <AlertContex.Provider
      value={{ toast: toastAlert, modal: showModal, confirm }}
    >
      {children}

      {toastData && (
        <ToastContainer
          title={toastData.title}
          message={toastData.message}
          icon={toastData.icon}
          onClose={() => setToastData(null)}
        />
      )}

      {modal && (
        <AlertModal
          open={!!modal}
          setOpen={() => setModal(null)}
          title={modal.title}
          deskripsi={modal.deskripsi}
          icon={modal.icon}
          confirmButtonText={modal.confirmButtonText || "OK"}
          confirmButtonColor={modal.confirmButtonColor || "primary"}
          onConfirm={handleConfirm}
          cancelText="Batal"
          onCancel={handleCancel}
        />
      )}
    </AlertContex.Provider>
  );
};
