const { Router } = require('express');
const indexRouter = Router();
const { getIndex, getNewMessageForm, postNewMessage, handleError, notFound } = require('../controllers/index.controller');

indexRouter.get('/{index}', getIndex);

indexRouter.get('/new', getNewMessageForm);

indexRouter.post('/new', postNewMessage);

indexRouter.use(notFound);

indexRouter.use(handleError);
    
module.exports = indexRouter;