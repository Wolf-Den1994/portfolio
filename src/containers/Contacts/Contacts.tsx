import { sendNetlifyForm } from '../../api';
import Form from '../../components/Form/Form';
import { FormPost, FormState } from '../../components/Form/types';
import ContactsIcons from './ContactsIcons/ContactsIcons';
import './Contacts.scss';

const Contacts = () => {
  const handleSubmit = (data: FormState) => {
    const formBody: FormPost = { 'form-name': 'contact', ...data };

    const preparedBody = Object.keys(formBody).reduce((acc, field, index) => {
      const encodedKey = encodeURIComponent(field);
      const encodedValue = encodeURIComponent(formBody[field]);
      const connector = index === 0 ? '' : '&';
      return `${acc}${connector}${encodedKey}=${encodedValue}`;
    }, '');

    sendNetlifyForm(preparedBody);
  };

  return (
    <div className="contacts">
      <div className="contacts__title">Contacts</div>
      <div className="contacts__divider" />
      <Form onSubmit={handleSubmit} />
      <ContactsIcons />
    </div>
  );
};

export default Contacts;
