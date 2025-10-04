const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return Hello Docker CI/CD', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('🚀 Hello Docker + Node.js + Express !');
  });
});