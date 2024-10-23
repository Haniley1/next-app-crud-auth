import ReactModal from 'react-modal'
import { Button } from 'components/Button'
import styles from './styles.module.scss'
import type { ModalProps } from './types'

export const Modal = ({ show, children, onClose }: ModalProps) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ReactModal
      isOpen={show}
      className={styles.Modal}
      ariaHideApp={false}
      overlayClassName={styles.Overlay}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick
      onRequestClose={onClose}
    >
      <Button className={styles.closeButton} onClick={onClose}>
        x
      </Button>
      {children}
    </ReactModal>
  )
}
