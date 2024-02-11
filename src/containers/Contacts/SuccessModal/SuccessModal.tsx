import { useDispatch } from 'react-redux';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/UI/Button/Button';
import Icon from '../../../components/UI/Icon/Icon';
import { iconClose } from '../../../data/icons';
import { toggleShowContactModal } from '../../../slices/layoutSlice';
import './SuccessModal.scss';

type SuccessModalProps = {
  text: string;
};

const SuccessModal = ({ text }: SuccessModalProps) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleShowContactModal(false));
  };

  return (
    <Modal onClose={handleClose}>
      <div className="success-modal">
        {text}
        <Button kind="primary" onClick={handleClose}>
          OK
        </Button>
        <Button className="icon-link" onClick={handleClose}>
          <Icon name={iconClose} />
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
