const { Router } = require('express');
const indexRouter = Router();
const { getIndex, getNewMessageForm, postNewMessage, handleError, notFound, validators } = require('../controllers/index.controller');

indexRouter.get('/', getIndex);

indexRouter.get('/new', getNewMessageForm);

indexRouter.post('/new', validators, postNewMessage);

indexRouter.use(notFound);

indexRouter.use(handleError);
    
module.exports = indexRouter;