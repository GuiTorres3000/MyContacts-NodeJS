import client from '../database/index.js';

export default class CategoryRepository {
    async list(orderBy = 'ASC') {
        const order = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const { rows } = await client.query(`SELECT * FROM categories ORDER BY name ${order}`);
        return rows;
    }

    async show(id) {
        const { rows } = await client.query(`SELECT * FROM categories WHERE id = '${id}'`);
        if (rows.length === 0) {
            throw new Error('Category not found');
        }
        return rows[0];
    }

    async store(category) {
        const { name } = category;
        const { rows } = await client.query(
            `INSERT INTO categories (name) VALUES ('${name}') RETURNING *`
        );
        return rows[0];
    }

    async update(id, updatedCategory) {
        const { name } = updatedCategory;
        const { rows } = await client.query(
            `UPDATE categories SET name = '${name}' WHERE id = '${id}' RETURNING *`
        );
        if (rows.length === 0) {
            throw new Error('Category not found');
        }
        return rows[0];
    }

    async delete(id) {
        const { rowCount } = await client.query(`DELETE FROM categories WHERE id = '${id}'`);
        if (rowCount === 0) {
            throw new Error('Category not found');
        }
    }
}
