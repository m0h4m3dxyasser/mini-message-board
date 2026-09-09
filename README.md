# Mini Message Board

My second tiny project applying what I’ve learned in Node.js while following The Odin Project.

Following the MVC pattern, I created a message board that displays messages left by others while allowing users to create new messages. Messages are currently stored and retrieved from a PostgreSQL database using a single shared connection pool, then rendered server-side using the EJS template engine. 

> [!NOTE]
> The database setup script is provided under `"scripts"` in `package.json` as `"db:populate"` for setting up the database schema. A `.env` file containing the database connection URL is required for the script to run successfully.

Inputs are validated server-side using `express-validator` before being stored in the database. If the validation fails, intuitive error messages are displayed for users.

Static files are served effortlessly thanks to Express's built-in `express.static()` middleware. A catch-all error-handling middleware is implemented to route all traffic targeting nonexistent resources to a 404 page or gracefully handle internal errors. 

This project also features organized routes by consolidating related routes together while taking advantage of `express.Router()`. Finally, I put my humble CSS skills to use to style the pages in an appealing way.