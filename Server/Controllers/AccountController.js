
const UpdateAccount = async (req, res) => {
  try{
      // get the updated data
    const {name : UpdatedName , email} = req.body
      // check it out
    if(!UpdatedName || !email) return req.status(201).json({
      error: true, 
      message: 'worng request data , there is not email or password!',
      data:[]
    })
    const UpdatedData = {
      name: UpdatedName,
      email,
    }
      // get the name
    const name = req.name
      // Get the database
    const db = req.db 
      // check for duplicate usernames in the db
    const UsersDB = db.collection('Users')
      // update user data
    const isUpdated = await UsersDB.updateOne({ name } , { $set: UpdatedData })
      if(isUpdated.modifiedCount === 0) return res.status(500).json({
      "error": true,
      "message": 'Failed to update the user data.',
      data:[]
    });
      // find the updated user
    const FindUser = await UsersDB.findOne({ name })
      // return error if exist before
    if (!FindUser) {
      return res.status(201).json({
        "error": true,
        "message": 'User with this name or email does not exist!',
        data:[]
      })
    }
    delete FindUser._id
    res.status(200).json({
      error: false,
      message: "the user is exist",
      data: FindUser
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": 'Server error. Please try again later.',
      data:[]
    })
  }   
}

const GetAccount = async (req, res) => {
  try{
      // get the name
    const name = req.name
      // Get the database
    const db = req.db 
      // check for duplicate usernames in the db
    const UsersDB = db.collection('Users')
      // find the user
    const FindUser = await UsersDB.findOne({ name })
      // return error if exist before
    if (!FindUser) {
      return res.status(201).json({
        "error": true,
        "message": 'User with this name or email does not exist!',
        data:[]
      })
    }
    delete FindUser.refreshToken
    delete FindUser.password
    res.status(200).json({
      error: false,
      message: "the user is exist",
      data: FindUser
    })
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message": 'Server error. Please try again later.',
      data:[]
    })
  }   
}

export default { 
  GetAccount, 
  UpdateAccount,
}