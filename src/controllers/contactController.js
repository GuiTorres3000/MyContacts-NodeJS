import ContactRepository from '../repositories/contactRepository.js';

export default class ContactController {

    constructor() {
        this.contacts = new ContactRepository();
    }

    index = async (request, response) => { // Listar todos os contatos
        const { orderBy } = request.query;
        console.log('orderBy:', orderBy);
        response.json(await this.contacts.list(orderBy));
    }

    show = async (request, response) => { // Obter um único contato
        const id = request.params.id; // ID do contato a ser obtido
        try {
            const contact = await this.contacts.show(id);
            response.json(contact);
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }

    store = async (request, response) => { // Criar um novo contato
        const { name, email, phone, category_id } = request.body; // Dados do contato a ser criado
        try {
            const newContact = await this.contacts.store({ name, email, phone, category_id });
            response.status(201).json(newContact);
        } catch (error) {
            response.status(400).json({ error: error.message });
        }
    }

    update = async (request, response) => { // Atualizar um contato existente
        const id = request.params.id; // ID do contato a ser atualizado
        const updatedData = request.body; // Dados do contato a ser atualizado
        try {
            const updatedContact = await this.contacts.update(id, updatedData);
            response.json(updatedContact);
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }

    delete = async (request, response) => { // Deletar um contato
        const id = request.params.id; // ID do contato a ser deletado
        try {
            await this.contacts.delete(id);
            response.status(204).send();
        } catch (error) {
            response.status(404).json({ error: error.message });
        }
    }
}
