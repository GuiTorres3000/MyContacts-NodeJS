import contactRepository from '../repositories/contactRepository.js';

class ContactController {
    index(request, response) { // Listar todos os contatos
        const contact = contactRepository.list();
        response.json(contact);
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