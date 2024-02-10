import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendNetlifyForm } from '../../api';
import Form from '../../components/Form/Form';
import { FormPost, FormState } from '../../components/Form/types';
import { RootState } from '../../slices';
import { toggleShowContactModal } from '../../slices/layoutSlice';
import ContactsIcons from './ContactsIcons/ContactsIcons';
import './Contacts.scss';
import SuccessModal from './SuccessModal/SuccessModal';

const Contacts = () => {
  const dispatch = useDispatch();
  const isShowContactModal = useSelector((state: RootState) => state.layout.isShowContactModal);

  const handleSubmit = (data: FormState) => {
    const formBody: FormPost = { 'form-name': 'contact', ...data };

    const preparedBody = Object.keys(formBody).reduce((acc, field, index) => {
      const encodedKey = encodeURIComponent(field);
      const encodedValue = encodeURIComponent(formBody[field]);
      const connector = index === 0 ? '' : '&';
      return `${acc}${connector}${encodedKey}=${encodedValue}`;
    }, '');

    sendNetlifyForm(preparedBody);
    dispatch(toggleShowContactModal(true));
  };

  return (
    <div className="contacts">
      <div className="contacts__title">Contacts</div>
      <div className="contacts__divider" />
      <Form onSubmit={handleSubmit} />
      <ContactsIcons />
      {isShowContactModal && createPortal(<SuccessModal />, document.body)}
    </div>
  );
};

export default Contacts;
