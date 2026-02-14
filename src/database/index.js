import { Client }  from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5433,
    database: 'mycontacts',
    user: 'root',
    password: 'root',
});

client.connect();

export default client;