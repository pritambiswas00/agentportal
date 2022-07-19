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
// const io = require("socket.io")(server, {
//       path: "/ws",
//       cors : {
//          origin: "*",
//          methods: ["GET", "POST"]
//       }
// })
// const newRouter = new Router(app,io, users);
// newRouter.setupConnection();
// newRouter.initialize();

// app.get("/applocal/**", async (req, res)=> {
       
// })
server.listen(PORT, ()=>{
       console.log("Server listening on port " + PORT);
})