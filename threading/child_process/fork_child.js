//do stuff here

process.on("message", (message) => {
  console.log(`Received from parent: ${message}`);
  process.send("Hello, parent!");
});

setTimeout(() => {
  process.exit();
}, 2000);
