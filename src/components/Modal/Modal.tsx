import { ReactNode } from 'react';
import Cover from '../Cover/Cover';
import './Modal.scss';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: ModalProps) => (
  <>
    <Cover onClose={onClose} />
    <div className="modal">{children}</div>
  </>
);

export default Modal;
