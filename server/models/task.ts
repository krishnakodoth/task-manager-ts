const mongooseTask = require("mongoose");
const ITask = require("../types/task")

const taskSchema = new mongooseTask.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: "todo" },
  //task: { type: String, required: true },
});

module.exports = mongooseTask.model("Task", taskSchema);
