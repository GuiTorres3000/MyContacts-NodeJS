import { v4 as uuid } from 'uuid';

const contacts = [
    { id: uuid(), name: 'John Doe', email: '', phone: '', category_id: uuid() },
    { id: uuid(), name: 'Jane Smith', email: '', phone: '', category_id: uuid() },
    { id: uuid(), name: 'Bob Johnson', email: '', phone: '', category_id: uuid() }
];

export default class ContactRepository {
    list() {
        return new Promise((resolve, reject) => {
            resolve(contacts);
        });
    };
}