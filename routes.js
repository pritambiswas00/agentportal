
const Router = function(app, io) {
        this.app = app;
        this.io = io;
        users = [];
}

Router.prototype.setupConnection = function () {
            this.io.on("connection", socket => {
            users.push({socket: socket});
        })
}

Router.prototype.initialize = function () {
      this.app.post("/send", this.send)
}

Router.prototype.send = function(req, res) {
      const { message } = req.body;
      users.map(user => {
          user.socket.emit("recieveMessage", message)
      });
      res.status(200).json({ status: true });
}

module.exports = { Router }