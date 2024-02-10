import { ReactNode } from 'react';
import './Modal.scss';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => (
  <>
    <div className="cover" onClick={onClose} role="presentation" />
    <div className="modal">{children}</div>
  </>
);

export default Modal;
