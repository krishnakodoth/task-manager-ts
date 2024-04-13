// const roterExpress = require("express");

const Express = require("express");

const { getTask,
  addTask,
  updateTask,
  deleteTask
 } = require("../controllers/task/index");

const router = Express.Router();


router.get("/tasks", getTask);
router.post("/tasks", addTask);
router.put('/tasks/:taskId', updateTask);
router.delete('/tasks/:taskId', deleteTask);

module.exports = router;
