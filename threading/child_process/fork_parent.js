import { fork } from "child_process";

const child = fork("fork_child.js"); // Fork a new Node.js process (e.g., child.js)

child.on("message", (message) => {
  console.log(`Received from child: ${message}`);
});

child.send("Hello, child!"); // Send a message to the child process

child.on("close", (data) => {
  console.log("child closed");
});
