const Task = require("../../models/task");

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send("Server Error");
  }
}
export const addTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    await newTask.save();
    res.status(200).send("Task Created");

  } catch (err) {
    res.status(500).send("Server Error");
  }
}

export const updateTask = async (req, res) => {
  try {
      await Task.findByIdAndUpdate(req.params.taskId,{
        title: req.body.title,
        description: req.body.description,
        status:req.body.status
      });
      res.status(200).send('Task Updated');
  } catch (err) {
      res.status(500).send('Server Error');
  }
}

export const deleteTask = async (req, res) => {
  try {
      await Task.findByIdAndDelete(req.params.taskId);
      res.status(200).send('Task Deleted');
  } catch (err) {
      res.status(500).send('Server Error');
  }
}