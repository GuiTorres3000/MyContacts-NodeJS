import ContactRepository from '../repositories/contactRepository.js';

class ContactController {
    async index(request, response) { // Listar todos os contatos
        const contacts = new ContactRepository();
        response.json(await contacts.list());
    }

    show() { // Obter um único contato
    }

    store() { // Criar um novo contato
    }

    update() { // Atualizar um contato existente
    }

    delete() { // Deletar um contato
    }
}

export default new ContactController();