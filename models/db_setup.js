const { Client } = require('pg');

async function main() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    });

    await client.connect();
    
    await client.query(`        
        create table messages (
            id int primary key generated always as identity,
            authorname varchar(255),
            message varchar(255),
            created_at TIMESTAMPTZ
        );
    `);

    await client.end();
}

main();