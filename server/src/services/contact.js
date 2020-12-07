import Contact from '../models/contact.js';

export const getContactById = (id) => Contact.findById(id);

export const getAllContacts = () => Contact.find();

export const createContact = (contact) => Contact.create(contact);
