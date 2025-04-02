import { spawn } from "child_process";

const command = spawn("find", ["/"]);

command.stdout.on("data", (result) => console.log(`${result}`));
command.stderr.on("data", (err) => console.log(`${err}`));
command.on("close", (existCode) => {
  console.log(`${existCode}`);
});
