const express = require('express');
const app = express();
const PORT = 5000;
const users = [];
const http = require('http');
const path = require('path');
const { Router } = require("./routes")
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(express.static(path.join(__dirname,"public")));
const server = http.createServer(app);
server.listen(PORT, ()=>{
       console.log("Server listening on port " + PORT);
})