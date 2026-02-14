import CategoryRepository from '../repositories/categoryRepository.js';

export default class CategoryController {

    constructor() {
        this.categories = new CategoryRepository();
    }

    index = async (request, response) => {
        try {
            response.json(await this.categories.list());
        } catch (error) {
            response.status(500).json({ error: error.message });
        }
    }

    show = async (request, response) => {
        const id = request.params.id;
        try {
            const category = await this.categories.show(id);
            response.json(category);
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }

    store = async (request, response) => {
        const { name } = request.body;
        try {
            const newCategory = await this.categories.store({ name });
            response.status(201).json(newCategory);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    update = async (request, response) => {
        const id = request.params.id;
        const { name } = request.body;
        try {
            const updatedCategory = await this.categories.update(id, { name });
            response.json(updatedCategory);
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }

    delete = async (request, response) => {
        const id = request.params.id;
        try {
            await this.categories.delete(id);
            response.status(204).send();
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }
}
