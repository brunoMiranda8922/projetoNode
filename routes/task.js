module.exports = app => {
  const Tasks = app.models.task;
  app.get("/tarefas", (req, res) => {
    Tasks.findAll({}, (task) => {
      res.send({task: task});
      res.status(200);
    });
  });
};