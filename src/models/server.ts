import cors from "cors";
import express from "express";

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.listen();
    this.middlewares();
    this.router();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server connected on port ${this.port}`);
    });
  }

  router() {
    this.app.use("/api");
  }

  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default Server;
