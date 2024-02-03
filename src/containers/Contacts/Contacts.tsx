import Form from '../../components/Form/Form';
import ContactsIcons from './ContactsIcons/ContactsIcons';
import './Contacts.scss';

const Contacts = () => (
  <div className="contacts">
    <div className="contacts__title">Contacts</div>
    <div className="contacts__divider" />
    <Form />
    <ContactsIcons />
  </div>
);

export default Contacts;
