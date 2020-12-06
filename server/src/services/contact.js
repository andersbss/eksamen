import Contact from '../models/contact.js';

export const getAllContacts = () => Contact.find();

export const createContact = (contact) => Contact.create(contact);
