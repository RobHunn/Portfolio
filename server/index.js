const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./controller/error.js');
const app = express();

const port = process.env.PORT ||  1337;

app.use(cors());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req,res)=>{
    res.json({
        message:'Hello world'
    })
});

app.use(middleware.notFound);
app.use(middleware.errorHandle);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`); 
});