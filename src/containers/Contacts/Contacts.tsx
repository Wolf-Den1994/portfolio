import { useState } from 'react';
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

const successText = 'Your message was successfully sent! I will reply to you shortly.';
const failureText = 'Something went wrong. Use the contacts below to contact me.';

const Contacts = () => {
  const dispatch = useDispatch();
  const isShowContactModal = useSelector((state: RootState) => state.layout.isShowContactModal);

  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (data: FormState) => {
    const formBody: FormPost = { 'form-name': 'contact', ...data };

    const preparedBody = Object.keys(formBody).reduce((acc, field, index) => {
      const encodedKey = encodeURIComponent(field);
      const encodedValue = encodeURIComponent(formBody[field]);
      const connector = index === 0 ? '' : '&';
      return `${acc}${connector}${encodedKey}=${encodedValue}`;
    }, '');

    const isSent = await sendNetlifyForm(preparedBody);
    setIsSuccess(isSent);
    dispatch(toggleShowContactModal(true));
  };

  return (
    <div id="contacts" className="contacts">
      <div className="contacts__title">Contacts</div>
      <div className="contacts__divider" />
      <Form onSubmit={handleSubmit} />
      <ContactsIcons />
      {isShowContactModal && createPortal(<SuccessModal text={isSuccess ? successText : failureText} />, document.body)}
    </div>
  );
};

export default Contacts;
