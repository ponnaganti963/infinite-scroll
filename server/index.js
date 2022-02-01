const express = require('express');
const {json,urlencoded} = express;
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
  .then(() => console.log("DB connnected"))
  .catch((err) => console.log("DB connection failed",err));

//middlewares
app.use(morgan("dev"));
app.use(cors({origin: true, credentials: true}));
app.use(urlencoded({extended: false}));
app.use(json());


//routes

// app.get('/', (req, res) => res.send("Hello world!"));

const postRoutes = require('./routes/post');
app.use("/",postRoutes);

const port = process.env.PORT || 8080;
app.listen(port,()=>
    console.log(`server is running on port ${port}`)
);