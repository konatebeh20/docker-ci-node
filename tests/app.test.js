const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello Docker CI/CD', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello Docker CI/CD', done);
  });
});