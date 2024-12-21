  // import bcrypt hash lib
import bcrypt from "bcryptjs"

  // import validator
import { validationResult } from 'express-validator'

  // ****************************************** register user handler
const NewUserHandler = async (req, res) =>{

    // check if we have errors vaildation
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      "error": true,
      "message": 'Validation failed',
      "errors": errors.array(),
    });
  }
  try{
      // get the data from the body
    const { name, email, password } = req.body
      // Get the database
    const db = req.db 
      // check for duplicate usernames in the db
    const UsersDB = db.collection('Users')
      // check for duplicate usernames in the db
    const isDuplicate = await UsersDB.findOne({
      $or: [{ name }, { email }],
    })
      // if we have duplicate return Conflict by 409
    if(isDuplicate) return res.status(409).json({
      'error': true,
      'message': "the user is exist before"
    }); 

      // hash the password and put some salt
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt)
      // create new user obj
    const newUser = {
      name: name,
      email : email,
      password: hashedPass,
    }
    const isInserted = await UsersDB.insertOne(newUser)
    if(isInserted.insertedCount === 0) return res.status(500).json({
      "error": true,
      "message": 'Failed to add the new user data.',
    });
      // send the response 201 is created
    res.status(201).json({
      "error": false, 
      'message': `new user ${name} is created!` 
    })
  } catch(err) {
    console.error(err)
      // throw error form the server
    res.status(500).json({
      "error": true,
      "message": 'Server error. Please try again later.',
    })
  }
}
// ****************************************** register user handler

export default { NewUserHandler }