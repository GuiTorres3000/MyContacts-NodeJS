

class ContactController {
    index(request, response) { // Listar todos os contatos
        response.send('List of contacts');
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