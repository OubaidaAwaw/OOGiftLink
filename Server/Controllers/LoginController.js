  // import bcrypt hash lib
import bcrypt from 'bcryptjs'
  // import JWT lib
import jwt from 'jsonwebtoken'
  // load environment variables
import dotenv from 'dotenv'
dotenv.config() 
  // import validator
import { validationResult } from 'express-validator'

  // ****************************************** Login user handler
const LoginHandler = async (req, res) => {
    // check if we have errors vaildation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      "error": true,
      "message": 'Validation failed',
      "errors": errors.array(),
    });
  }
  try{
      // get the data from the body
    const { email, password } = req.body;
      // Get the database
    const db = req.db 
      // check for duplicate usernames in the db
    const UsersDB = db.collection('Users')
      // find the user
    const FindUser = await UsersDB.findOne({ email });
      // return error if exist before
    if (Object.keys(FindUser).length === 0) return res.status(409).json({
      "error": true,
      "message": 'User with this name or email does not exist!',
    });
      // evaluate the password
    const isMatchPass = await bcrypt.compare(password, FindUser.password)
    if (isMatchPass) {
        // create new accessToken
      const accessToken = jwt.sign(
        {
          "name": FindUser.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        { 
          expiresIn: '15m' 
        }
      ) 
        // create new refreshToken
      const refreshToken = jwt.sign(
        { 
          "name": FindUser.name
        },
        process.env.REFRESH_TOKEN_SECRET,
        { 
          expiresIn: '1d' 
        }
      ) 
        // update the user data 
      const isUpdated = await UsersDB.updateOne({_id : FindUser._id} , { $set: { refreshToken } })
      if(isUpdated.modifiedCount === 0) return res.status(500).json({
        "error": true,
        "message": 'Failed to update the refresh token.',
      })
        // set cookies in the user browser
      res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
        // send the response
      res.status(200).json({
        "error": false,
        accessToken
      })
    } else {
        // throw unmatch error 
      res.status(401).json({
        'error' : true,
        'message': 'unmatch password!!' 
      }) 
    }
  } catch(err){
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": 'Server error. Please try again later.',
    });
  }   
}
// ****************************************** Login user handler

export default { LoginHandler }