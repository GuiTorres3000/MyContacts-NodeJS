import { v4 as uuid } from 'uuid';

const contacts = [
    { id: uuid(), name: 'Developer', email: 'developer@example.com', phone: '', category_id: uuid() },
    { id: uuid(), name: 'Guy', email: 'guy@example.com', phone: '', category_id: uuid() },
    { id: uuid(), name: 'Admin', email: 'admin@example.com', phone: '', category_id: uuid() }
];

export default class ContactRepository {
    list() {
        return new Promise((resolve, reject) => {
            resolve(contacts);
        });
    };

    show(id) {
        return new Promise((resolve, reject) => {
            const contact = contacts.find(contact => contact.id === id);
            if (contact) {
                resolve(contact);
            } else {
                reject(new Error('Contact not found'));
            }
        });
    }

    store(contact) {
        return new Promise((resolve, reject) => {
            const newContact = { id: uuid(), ...contact };
            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, updatedContact) {
        return new Promise((resolve, reject) => {
            const index = contacts.findIndex(contact => contact.id === id);
            if (index !== -1) {
                const updated = { ...contacts[index], ...updatedContact };
                contacts[index] = updated;
                resolve(updated);
            } else {
                reject(new Error('Contact not found'));
            }
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            const index = contacts.findIndex(contact => contact.id === id);
            if (index !== -1) {
                contacts.splice(index, 1);
                resolve();
            } else {
                reject(new Error('Contact not found'));
            }
        });
    }
}