import { Modal } from 'components/Modal'
import { UserForm } from '../UserForm'
import type { UserModalProps } from './types'

export const UserModal = ({ show, onClose, onSubmit }: UserModalProps) => {
  return (
    <Modal show={show} onClose={onClose}>
      <UserForm onSubmit={onSubmit} />
    </Modal>
  )
}
