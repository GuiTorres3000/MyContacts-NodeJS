import client from '../database/index.js';

export default class ContactRepository {
    async list() {
        const { rows } = await client.query('SELECT * FROM contacts ORDER BY name');
        return rows;
    }

    async show(id) {
        const { rows } = await client.query(`SELECT * FROM contacts WHERE id = '${id}'`);
        if (rows.length === 0) {
            throw new Error('Contact not found');
        }
        return rows[0];
    }

    async store(contact) {
        const { name, email, phone, category_id } = contact;
        const { rows } = await client.query(
            `INSERT INTO contacts (name, email, phone, category_id) VALUES ('${name}', '${email}', '${phone}', '${category_id}') RETURNING *`
        );
        return rows[0];
    }

    async update(id, updatedContact) {
        const { name, email, phone, category_id } = updatedContact;
        const { rows } = await client.query(
            `UPDATE contacts SET name = '${name}', email = '${email}', phone = '${phone}', category_id = '${category_id}' WHERE id = '${id}' RETURNING *`
        );
        if (rows.length === 0) {
            throw new Error('Contact not found');
        }
        return rows[0];
    }

    async delete(id) {
        const { rowCount } = await client.query(`DELETE FROM contacts WHERE id = '${id}'`);
        if (rowCount === 0) {
            throw new Error('Contact not found');
        }
    }
}