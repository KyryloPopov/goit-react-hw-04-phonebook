import React from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleAddContact }) => {
  const handleFormSubmit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    const formData = {
      name,
      number,
    };

    handleAddContact(formData);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.form}>
      <label className={css.label}>
        <span>Name</span>
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        <span>Number</span>
        <input type="tel" name="number" required />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
