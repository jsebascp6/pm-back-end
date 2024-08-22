import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import User from '../../models/User.mjs';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('User Model', function () {
  it('should hash the password before saving a user', async function () {
    const user = await User.create({
      username: 'testuser',
      email: 'test@example.com',
      password: 'plaintextpassword',
    });
    expect(user.password).to.not.equal('plaintextpassword');
    expect(user.password).to.have.length.above(0);
  });

  it('should validate a correct password', async function () {
    const user = await User.create({
      username: 'testuser2',
      email: 'test2@example.com',
      password: 'mysecurepassword',
    });
    const isValid = await user.validPassword('mysecurepassword');
    expect(isValid).to.be.true;
  });

  it('should generate a valid JWT token', function () {
    const user = User.build({ id: 1, username: 'testuser' });
    const token = user.generateAuthToken();
    expect(token).to.be.a('string');
  });

  it('should not create a user with an invalid email', function () {
    return expect(
      User.create({
        username: 'invaliduser',
        email: 'invalidemail',
        password: 'password123',
      })
    ).to.be.rejectedWith(Error);
  });
});
