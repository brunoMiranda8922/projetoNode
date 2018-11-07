module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app.route('/tasks')
    .all((req, res, next) => {
      //middleware de pré execução das rotas
      //req.body.id;
      next();
    })
    .get((req, res) => {
      // "tasks": lista tarefas
      Tasks.findAll({})
        .then(result => res.send(result))
        .catch(error => {
          res.status(412).send({msg: error.menssage});
        });
    })
    .post((req, res) => {
      // "tasks": Cadastra uma nova tarefa
      Tasks.create(req.body)
      .then(result => res.send(result))
      .catch(error => {
        res.status(412).send({msg: error.menssage});
      });
    });
  app.route('/tasks/:id')
    .all((req, res, next) => {
      //middleware de pré execução das rotas
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      // "tasks/1": Consulta uma tarefa
    })
    .put((req, res) => {
      // "tasks/1": Atualiza uma tarefa
    })
    .delete((req, res) => {
      // "tasks/1": Exclui uma tarefa
    });
};