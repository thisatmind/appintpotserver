import express from 'express';
import bodyParser from 'body-parser';
import user from './router/user-router';
import usage from './router/usage-router';
import install from './router/install-router';

const app = express();

// express config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// express router
app.use('/user', user);
app.use('/usage', usage);
app.use('/install', install);

const port = process.env.PORT || 8080;

app.listen(port, (req, res, next) => {
   console.log(`server is listening ${port}`);
});