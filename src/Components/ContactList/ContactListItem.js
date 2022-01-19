import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ContactForm/ContactFormStyled';

const ContactListItem = ({ contact, onDeleteContact }) => (
  <>
    <span>
      {contact.name}: {contact.number}
    </span>
    <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
  </>
);

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
