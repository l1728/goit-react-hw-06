import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
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
        <button className={styles.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
