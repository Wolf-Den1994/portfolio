import { iconClose } from '../../data/icons';
import Modal from '../Modal/Modal';
import Button from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import './ModalDefault.scss';

type ModalDefaultProps = {
  prevText?: string;
  text: string;
  prevTextStyle?: Record<string, unknown>;
  textStyle?: Record<string, unknown>;
  onClose: () => void;
};

const ModalDefault = ({ prevText, text, prevTextStyle, textStyle, onClose }: ModalDefaultProps) => (
  <Modal onClose={onClose}>
    <div className="modal-default">
      <div style={textStyle}>
        {prevText && <span style={prevTextStyle}>{prevText}</span>}
        {text}
      </div>
      <Button kind="primary" onClick={onClose}>
        OK
      </Button>
      <Button className="icon-link" onClick={onClose}>
        <Icon name={iconClose} />
      </Button>
    </div>
  </Modal>
);

ModalDefault.defaultProps = {
  prevText: '',
  prevTextStyle: {},
  textStyle: {},
};

export default ModalDefault;
