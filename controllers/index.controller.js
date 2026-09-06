const { getMessages, addMessage } = require('../models/message.model');

function getIndex(req, res) {
    res.render('index', { title: "Mini Message Board", messages: getMessages() });
}

function getNewMessageForm(req, res) {
    res.render('form', { title: "New Message" });
}

function postNewMessage(req, res) {
    const newMsg = {
        text: req.body.message,
        user: req.body.author,
        added: new Date()
    };
    addMessage(newMsg);
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
    postNewMessage,
    notFound,
    handleError
};