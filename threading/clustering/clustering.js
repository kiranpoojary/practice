import cluster from "cluster";
import os from "os";
import express from "express";

const totalCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process started with PID: ${process.pid}`);

  // Fork worker processes
  for (let i = 0; i < totalCPUs; i++) {
    const worker = cluster.fork({ pr_id: i + 1 });
    console.log(`Worker ${i + 1} forked with PID: ${worker.process.pid}`);
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app = express();

  app.get("/health", async (req, res) => {
    console.log(process?.pid);
    res.status(200).send({ pid: process?.pid, pr_id: process?.env?.pr_id });
  });

  app.get("/users", async (req, res) => {
    console.log(process?.pid);
    res.status(200).send({ pid: process?.pid, pr_id: process?.env?.pr_id });
  });

  app.post("/users", async (req, res) => {
    console.log(process?.pid);
    res.status(200).send({ pid: process?.pid, pr_id: process?.env?.pr_id });
  });

  app.listen(3000, (err) => {
    if (!err) {
      console.log(
        `Server started on PID: ${process?.pid} and SL No.: ${process?.env?.pr_id}`
      );
    } else {
      console.log(err);
    }
  });
}
