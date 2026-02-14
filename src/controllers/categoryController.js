import CategoryRepository from '../repositories/categoryRepository.js';

export default class CategoryController {

    constructor() {
        this.categories = new CategoryRepository();
    }

    index = async (request, response, next) => {
        try {
            const { orderBy } = request.query;
            const categories = await this.categories.list(orderBy);
            response.json(categories);
        } catch (error) {
            next(error);
        }
    }

    show = async (request, response, next) => {
        try {
            const id = request.params.id;
            const category = await this.categories.show(id);
            response.json(category);
        } catch (error) {
            next(error);
        }
    }

    store = async (request, response, next) => {
        try {
            const { name } = request.body;
            const newCategory = await this.categories.store({ name });
            response.status(201).json(newCategory);
        } catch (error) {
            next(error);
        }
    }

    update = async (request, response, next) => {
        try {
            const id = request.params.id;
            const { name } = request.body;
            const updatedCategory = await this.categories.update(id, { name });
            response.json(updatedCategory);
        } catch (error) {
            next(error);
        }
    }

    delete = async (request, response, next) => {
        try {
            const id = request.params.id;
            await this.categories.delete(id);
            response.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
