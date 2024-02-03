import Icon from '../../../components/UI/Icon/Icon';
import contactsIconsData from '../../../data/contacts-icons';
import './ContactsIcons.scss';

const ContactsIcons = () => (
  <div className="contacts-icons">
    {contactsIconsData.map(({ icon }) => (
      <Icon name={icon} />
    ))}
  </div>
);

export default ContactsIcons;
