import express from 'express';
import routes from './routes.js';

const app = express();

app.use(express.json());

app.use((request, response, next) => {
    console.log(`${request.method} ${request.url}`);
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(routes);

// Middleware de tratamento de erros (deve ficar DEPOIS das rotas)
app.use((error, request, response, next) => {
    console.error('Error:', error);

    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';

    response.status(statusCode).json({ error: message });
});

app.listen(3333, () => console.log('Server started on port 3333'));