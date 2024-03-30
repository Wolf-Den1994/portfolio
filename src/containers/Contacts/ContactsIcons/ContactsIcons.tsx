import { memo } from 'react';
import Button from '../../../components/UI/Button/Button';
import Icon from '../../../components/UI/Icon/Icon';
import contactsIconsData from '../../../data/contacts-icons';
import './ContactsIcons.scss';

const ContactsIcons = () => (
  <div className="contacts-icons">
    {contactsIconsData.map(({ icon, linkUrl, delayShow }) => (
      <Button
        key={linkUrl}
        type="link"
        linkOptions={{ linkUrl, target: '_blank', rel: 'noreferrer' }}
        className="icon-link wow fadeIn"
        animateDelay={delayShow}
      >
        <Icon name={icon} />
      </Button>
    ))}
  </div>
);

export default memo(ContactsIcons);
