module.exports = app => {
  app.db.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`server up - porta ${app.get('port')}`);
    });
  });
};