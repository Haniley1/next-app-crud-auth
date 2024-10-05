import ReactModal from 'react-modal'
import styles from './styles.module.scss'
import type { ModalProps } from './types'

export const Modal = ({ show, children, onClose }: ModalProps) => {
  return (
    <ReactModal
      isOpen={show}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  )
}
