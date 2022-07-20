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

  // get isHttps() {
  //   return "isHttps" in this.config ? this.config.isHttps : false;
  // }
}

module.exports = ServerConfig;


