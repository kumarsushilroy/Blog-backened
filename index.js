
const express = require('express');
const connect = require('./Db/Connection');
const cors = require('cors');
const UserRoute = require('./Routes/UserRoutes');
const blogRoute = require('./Routes/BlogRoutes');
const dotenv = require('dotenv')
dotenv.config();


const port = process.env.PORT || 4000

const app = express();


// middleware.........................
app.use(express.json()); 
app.use(cors());
app.use(UserRoute);
app.use(blogRoute);


app.listen(port, ()=>{
    connect();
})