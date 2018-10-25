module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`server up - porta ${app.get('port')}`);
  });
};