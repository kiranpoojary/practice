class TaskScheduler {
  constructor() {
    this.taskQ = [];
  }

  schedule(task, time) {
    this.taskQ.push({ task, time });
    this.taskQ = this.taskQ.sort((a, b) => a.time - b.time);
  }

  start() {
    if (this.taskQ.length == 0) return;
    while (this.taskQ.length > 0 && this.taskQ[0].time <= new Date()) {
      const { task } = this.taskQ.shift();
      task();
    }
    setTimeout(() => {
      this.start();
    }, 100);
  }
}

const scheduler = new TaskScheduler();
scheduler.schedule(() => {
  console.log("Task-1");
}, new Date().getTime() + 5000);

scheduler.schedule(() => {
  console.log("Task-2");
}, new Date().getTime() + 1000);

scheduler.schedule(() => {
  console.log("Task-3");
}, new Date().getTime() + 3000);

scheduler.start();
