import { deleteContact } from 'components/redux/operations';
import { selectFilteredContacts } from 'components/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className={css.wraperContactList}>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={css.contactListItem}>
            {name}: {phone}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
