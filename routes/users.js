module.exports = app => {
  const Users = app.db.models.Users;

  app.route('/users')
    .get((req, res) => {
      // "users": lista todos os usuarios
      Users.findAll({})
        .then(result =>  res.send(result))
        .catch(error => {
          res.status(412).send({msg: error.message});
        });
    })
    .post((req, res) => {
      Users.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });
  app.route('/users/:id')
    .get((req, res) => {
      Users.findById(req.params.id, {
        attributes: ['id', 'name', 'email', 'created_at']
      })
        .then(result => {
          if (result) {
            res.send(result);
          } else {
            res.status(404).send({'user': 'not found'});
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
      Users.destroy({where: {id: req.params.id} })
        .then(result => {
          if (result) {
            res.sendStatus(204);
          } else {
            res.status(404).send({'user': 'not found'});
          }
        })
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    });
};