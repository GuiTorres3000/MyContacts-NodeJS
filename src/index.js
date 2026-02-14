import express from 'express';
import routes from './routes.js';

const app = express();

app.use((request, response) => {
    console.log(`${request.method} ${request.url}`);
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
});

app.use(routes);
app.listen(3333, () => console.log('Server started on port 3333'));