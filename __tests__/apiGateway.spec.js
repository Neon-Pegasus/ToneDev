const request = require('supertest');
// const moxios = require('moxios')
const gateway = require('../server/gatewayServer');


// const req = request(nodeGateway);

describe('GET / ', () => {

  // beforeEach(() => {
  //   moxios.install();
  // });
  // afterEach(() => {
  //   moxios.uninstall();
  // });

  // test('It should fetch answers from SO', async () => {
  //   moxios.stubRequest('https://so-answer-search-tonedev.herokuapp.com/api/user/so', {
  //     status: 200,
  //     response: 'RETRIEVED',
  //   });
  //   const app = server;

  //   await request(app).get('/api/user/so');
  // });

  test('node gateway responds to /', async () => {
    const response = await request(gateway).get('/gateway/org/sentiment');
    expect(response.statusCode).toBe(200);
  });
});
