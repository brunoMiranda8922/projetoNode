module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app.route('/tasks')
    .get((req, res) => {
      // "tasks": lista tarefas
      Tasks.findAll({})
        .then(result => res.send(result))
        .catch(error => {
          res.status(412).send({msg: error.message});
        });
    })
    .post((req, res) => {
      // "tasks": Cadastra uma nova tarefa
      Tasks.create(req.body)
        .then(result => res.json(result).status(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });
  app.route('/tasks/:id')
    .get((req, res) => {
      // "tasks/1": Consulta uma tarefa
      Tasks.findOne({where: req.params})
        .then(result => {
          if (result) {
            res.json(result);
          } else {
            res.status(404).send({'tasks' : 'not found'});
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .put((req, res) => {
      // "tasks/1": Atualiza uma tarefa
      Tasks.update(req.body, {where: req.params})
        .then(res.sendStatus(204))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
      // "tasks/1": Exclui uma tarefa
      Tasks.destroy({where: req.params})
        .then(result => {
          if (result) {
            res.sendStatus(204);
          } else {
            res.status(404).send({'tasks' : 'not found'});
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });
};
