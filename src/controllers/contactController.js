import ContactRepository from '../repositories/contactRepository.js';

export default class ContactController {

    constructor() {
        this.contacts = new ContactRepository();
    }

    index = async (request, response, next) => { // Listar todos os contatos
        try {
            const { orderBy } = request.query;
            const contacts = await this.contacts.list(orderBy);
            response.json(contacts);
        } catch (error) {
            next(error);
        }
    }

    show = async (request, response, next) => { // Obter um único contato
        try {
            const id = request.params.id;
            const contact = await this.contacts.show(id);
            response.json(contact);
        } catch (error) {
            next(error);
        }
    }

    store = async (request, response, next) => { // Criar um novo contato
        try {
            const { name, email, phone, category_id } = request.body;
            const newContact = await this.contacts.store({ name, email, phone, category_id });
            response.status(201).json(newContact);
        } catch (error) {
            next(error);
        }
    }

    update = async (request, response, next) => { // Atualizar um contato existente
        try {
            const id = request.params.id;
            const updatedData = request.body;
            const updatedContact = await this.contacts.update(id, updatedData);
            response.json(updatedContact);
        } catch (error) {
            next(error);
        }
    }

    delete = async (request, response, next) => { // Deletar um contato
        try {
            const id = request.params.id;
            await this.contacts.delete(id);
            response.status(204).send();
        } catch (error) {
            next(error);
        }
    }
}
