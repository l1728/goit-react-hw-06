import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={styles.containerContacts}>
      <li className={styles.containerContact}>
        <div className={styles.contactInfo}>
          <p className={styles.dataContact}>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
            <span className={styles.contactName}>{contact.name}</span>
          </p>
          <p className={styles.dataContact}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            {contact.number}
          </p>
        </div>
        <button
          className={styles.deleteBtn}
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
