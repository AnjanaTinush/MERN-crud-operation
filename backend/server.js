const express = require("express");
const cors = require("cors");

const app = express();

const dbconfig = require('./db')
const employeeRoute = require('./Routes/employeeRoutes')

app.use(express.json())
app.use(cors());

app.use('/api/employees', employeeRoute);

const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log("node server started using nodemon!"));

