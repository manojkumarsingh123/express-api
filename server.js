const express =  require('express');
const dotenv = require('dotenv');
//load env var

dotenv.config({path : './config/config.env'});

const PORT = process.env.PORT

const app = express();

app.listen(
    PORT,
    console.log("server is running")
    );