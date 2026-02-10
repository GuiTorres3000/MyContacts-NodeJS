const contacts = [
    { id: 1, name: 'John Doe', email: '' },
    { id: 2, name: 'Jane Smith', email: '' },
    { id: 3, name: 'Bob Johnson', email: '' }
];

class contactRepository {
    list() {
        return new Promise((resolve, reject) => {
            resolve(contacts);
        });
    };
}