import { useState, forwardRef, Ref, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { UseFormReset } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { sendNetlifyForm } from '../../api';
import Form from '../../components/Form/Form';
import { FormPost, FormState } from '../../components/Form/types';
import ModalDefault from '../../components/ModalDefault/ModalDefault';
import Title from '../../components/Title/Title';
import { RootState } from '../../slices';
import { toggleShowContactModal } from '../../slices/layoutSlice';
import ContactsIcons from './ContactsIcons/ContactsIcons';
import './Contacts.scss';

const Contacts = forwardRef((props, forwardedRef: Ref<HTMLDivElement>) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const dispatch = useDispatch();
  const isShowContactModal = useSelector((state: RootState) => state.layout.isShowContactModal);
  const { t } = useTranslation();

  const handleClose = useCallback(() => dispatch(toggleShowContactModal(false)), []);
  const openModal = useCallback(() => dispatch(toggleShowContactModal(true)), []);

  const handleSubmit = useCallback(async (data: FormState, reset: UseFormReset<FormState>) => {
    const formBody: FormPost = { 'form-name': 'contact', ...data };

    const preparedBody = Object.keys(formBody).reduce((acc, field, index) => {
      const encodedKey = encodeURIComponent(field);
      const encodedValue = encodeURIComponent(formBody[field]);
      const connector = index === 0 ? '' : '&';
      return `${acc}${connector}${encodedKey}=${encodedValue}`;
    }, '');

    const isSent = await sendNetlifyForm(preparedBody);
    setIsSuccess(isSent);
    openModal();

    if (isSent) {
      reset();
    }
  }, []);

  return (
    <div id="contacts" className="contacts" ref={forwardedRef}>
      <Title text={t('contacts.title')} />
      <Form onSubmit={handleSubmit} />
      <ContactsIcons />
      {isShowContactModal &&
        createPortal(
          <ModalDefault
            text={isSuccess ? t('contacts.success_text') : t('contacts.failure_text')}
            onClose={handleClose}
          />,
          document.body,
        )}
    </div>
  );
});

export default Contacts;
