import { DataTypes  } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import sequelize from '../config/database.mjs';

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }
});

User.prototype.generateAuthToken = function() {
  const payload = { id: this.id, username: this.username  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h'  });
};

User.prototype.validPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

export default User;
