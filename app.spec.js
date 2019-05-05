var shell = require('shelljs');
var request = require('supertest');
var app = require('./app');

describe('api', () => {
  beforeEach(() => {
    shell.exec('npm sequelize db:migrate:undo:all')
    shell.exec('npm sequelize db:create')
    shell.exec('npm sequelize db:migrate')
  })

  describe('Test favorite city post path', () => {
    test('without required body, should have status code 500', () => {
      return request(app).post('/api/v1/favorites').then(response => {
        expect(response.status).toBe(500)
      })
    })
  })
})
