const router = require("express").Router();
const todosRouter = require("../modules/todos/todo.api");
const subtaskRouter = require("../modules/subtask/subtask.api");

router.use("/subtasks", subtaskRouter);
router.use("/todos", todosRouter);

module.exports = router;
