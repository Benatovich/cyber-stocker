const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = class UserService {
  static async create({ username, password, phoneNumber, email }) {
    const passwordHash = bcrypt.hashSync(
      password, 
      Number(process.env.SALT_ROUNDS)
    );
    
    console.log('!passwordHash', passwordHash, password, Number(process.env.SALT_ROUNDS));
    const thing = await User.insert({
      username,
      passwordHash,
      phoneNumber,
      email
    });

    return thing;
  }

  // static async signIn({ email, password = '' }) {
  //   try {
  //     const user = email;
  //     const passwordHash =  await bcrypt.hash(
  //       password,
  //       Number(process.env.SALT_ROUNDS)
  //     );
  //     if (!bcrypt.compareSync(password, passwordHash)) {
  //       throw new Error('Invalid email or passowrd');
        
  //     }
  //   } catch (error) {
      
  //   }
  // }



};
