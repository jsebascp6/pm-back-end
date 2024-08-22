import * as chaiModule from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server.mjs';
import User from '../../models/User.mjs';

const chai = chaiModule.use(chaiHttp);
const should = chai.should();

describe('User Registration and Login', function () {
  before(async function () {
    await User.destroy({ where: {}, truncate: true });
  });

  it('should register a new user and return a JWT', function (done) {
    const user = {
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'securepassword123',
    };

    chai.request
      .execute(server)
      .post('/api/v1/users/register')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('token');
        done();
      });
  });

  it('should login an existing user and return a JWT', function (done) {
    const user = {
      email: 'johndoe@example.com',
      password: 'securepassword123',
    };

    chai.request
      .execute(server)
      .post('/api/v1/users/login')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('token');
        done();
      });
  });
});
