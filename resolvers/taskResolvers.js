const Task = require('../models/Task');

const taskResolvers = {
  getTasks: async () => await Task.find(),

  createTask: async ({ input }) => {
    const newTask = new Task(input);
    return await newTask.save();
  },

  updateTask: async ({ id, input }) => {
    return await Task.findByIdAndUpdate(id, input, { new: true });
  },

  deleteTask: async ({ id }) => {
    await Task.findByIdAndDelete(id);
    return `Tarea con ID ${id} eliminada`;
  },
};

module.exports = taskResolvers;
