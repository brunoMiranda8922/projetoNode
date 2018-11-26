describe('Routes: Tasks', () => {
  const Users = app.db.models.Users;
  const Tasks = app.db.models.Tasks;
  
  beforeEach(() => {
    Users
      .destroy({where: {}})
      .then(() => Users.create({
        name: 'John',
        email: 'john@mail.net',
        password: '12345'
      }))
      .then(user => {
        Tasks
          .destroy({where: {}})
          .then(() => Tasks.bulkCreate([{
            id: 1,
            title: 'Work',
            user_id: user.id
          }, {
            id: 2,
            title: 'Study',
            user_id: user.id
          }]))
          .then(tasks => {
            fakeTask = tasks[0];
            token = jwt.encode({id: user.id}, jwtSecret);
          });
      });
  });
  describe('GET /tasks', () => {
    describe('status 200', () => {
      it('returns a list of tasks', done => {
        request.get('/tasks')
          .expect(200);
        done();
      });
    });
  });
  describe('POST /tasks/', () => {
    describe('status 200', () => {
      it('creates a new task', done => {
        //
      });
    });
  });
  describe('GET /tasks/:id', () => {
    describe('status 200', () => {
      it('returns one tasks by id', done => {
        // 
      });
    });
    describe('status 404', () => {
      it('throws error when task not exist', done => {
        //
      });
    });
  });
  describe('PUT /tasks/:id', () => {
    describe('status 204', () => {
      it('update a task', done => {
        //
      });
    });
  });
  describe('DELETE /tasks/:id', () => {
    describe('status 204', () => {
      it('removes a task', done => {
        //
      });
    });
  });
});
