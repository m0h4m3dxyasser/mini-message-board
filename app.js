const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(port, (error) => {
  if (error) {
    console.error(`error occurred while starting the server: ${error}`);
  } else {
    console.log(`server is running on port ${port}`);
  }
});