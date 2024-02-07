import Button from '../../../components/UI/Button/Button';
import Icon from '../../../components/UI/Icon/Icon';
import contactsIconsData from '../../../data/contacts-icons';
import './ContactsIcons.scss';

const ContactsIcons = () => (
  <div className="contacts-icons">
    {contactsIconsData.map(({ icon, linkUrl }) => (
      <Button key={linkUrl} kind="link" linkUrl={linkUrl} className="icon-link">
        <Icon name={icon} />
      </Button>
    ))}
  </div>
);

export default ContactsIcons;
