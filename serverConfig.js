const fs = require("fs");

class ServerConfig {
  constructor() {
    this.config = {};
  }

  loadConfig(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, "utf8", (error, data) => {
        if (error) {
          this.config = {};
          reject(error);
        } else {
          try {
            this.config = JSON.parse(data);
            resolve();
          } catch (error) {
            this.config = {};
            reject(error);
          }
        }
      });
    });
  }

  get proxyServer() {
    return "proxyServer" in this.config ? this.config.proxyServer : {};
  }

  get hostServerDetails() {
    return "hostServerDetails" in this.config ? this.config.hostServerDetails : {};
  }
}

module.exports = ServerConfig;


