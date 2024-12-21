const handleLogout = async (req, res) => {
  try{
      // get the cookies
    const cookies = req.cookies;
      // no content
    if (!cookies?.jwt) return res.status(200).json({
      "error": false,
      "message": "the operation done successfully!!"
    }); 
      // put the jwt Cookie
    const refreshToken = cookies.jwt;
      // get the db
    const DB = req.db
      // get the users collections
    const UsersDB = DB.collection("Users")
      // Is refreshToken in db?
      // Delete refreshToken from db
    const isUpdated = await UsersDB.updateOne({ refreshToken } ,{$set: { refreshToken: "" }});
    if(isUpdated.modifiedCount === 0) {
      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
      return res.status(200).json({
        "error": false,
        "message": "the operation done successfully!!"
      })
    }
    // remove the cookies form client
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.status(200).json({
      "error": false,
      "message": "the operation done successfully!!"
    });
  } catch(err) {
    console.error(err)
    res.status(500).json({
      "error": true,
      "message" : 'Server error. Please try again later.'
    })
  } 
}

export default { handleLogout }