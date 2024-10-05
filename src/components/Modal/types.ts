import type { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose?: VoidFunction
}
