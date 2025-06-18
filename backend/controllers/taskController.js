const db = require("../models");

exports.getTasks = async (req, res) => {
  const tasks = await db.Task.findAll({ where: { UserId: req.userId } });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  const task = await db.Task.create({ title, description, dueDate, UserId: req.userId });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const { title, description, dueDate } = req.body;
  await db.Task.update({ title, description, dueDate }, { where: { id: req.params.id, UserId: req.userId } });
  res.json({ message: "Task updated" });
};

exports.deleteTask = async (req, res) => {
  await db.Task.destroy({ where: { id: req.params.id, UserId: req.userId } });
  res.json({ message: "Task deleted" });
};
