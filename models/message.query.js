const pool = require('./pool');

async function getMessages() {
    const results = await pool.query("SELECT * FROM messages");
    return results.rows;
}

async function addMessage(authorname, message, date) {
    await pool.query("INSERT INTO messages (authorname, message, created_at) VALUES ($1, $2, $3)", [authorname, message, date]);
}
module.exports = {
    getMessages,
    addMessage
}