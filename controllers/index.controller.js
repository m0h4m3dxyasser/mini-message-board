const { getMessages, addMessage } = require('../models/message.query');
const { body, validationResult, matchedData } = require('express-validator');

const validators = [
    body('author')
        .trim()
        .notEmpty()
        .withMessage("name cannot be empty"),
    body('message')
        .trim()
        .isLength({ min: 1, max: 100 })
        .withMessage("message must be between 1 to 100 characters")
];

async function getIndex(req, res) {
    res.render('index', { title: "Mini Message Board", messages: await getMessages() });
}

function getNewMessageForm(req, res) {
    res.render('form', {
        title: "New Message",
        author: '',
        message: '',
        errors: []
    });
}

async function postNewMessage(req, res) {
    const results = validationResult(req);

    if (!results.isEmpty()) {
        res.render('form', {
            title: "New Message",
            author: req.body.author,
            message: req.body.message,
            errors: results.array()
        });
        return;
    }

    const data = matchedData(req);
    await addMessage(data.author, data.message, new Date());
    res.redirect('/');
}

function notFound(req, res, next) {
    next({ status: 404, message: 'Page not found' });
}

function handleError(err, req, res, next) {
    console.error(err.stack);
    if (err.status === 404) {
        res.status(404).render('error', { message: 'Page Not Found' });
    } else {
        res.status(500).render('error', { message: 'Internal Server Error' });
    }
}

module.exports = {
    getIndex,
    getNewMessageForm,
    validators,
    postNewMessage,
    notFound,
    handleError
};