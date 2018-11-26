describe('Routes: index', () => {
  describe('GET /', () => {
    it('return the API status', done => {
      request.get('/')
        .expect(200)
        .end((err, res) => {
          const expected = {status: 'API NODE'};
          expect(res.body).to.eql(expected);
          done(err);
        });
    });
  });
});