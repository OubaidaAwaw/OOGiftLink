  // import JWT lib
import jwt from 'jsonwebtoken'

  // ****************************************** refresh the user token handler
const RefreshTokenHandler = async (req, res) => {
    // get the user Cookies
  const cookies = req.cookies;
    // check if the jwt cookie is exist
  if (!cookies?.jwt) return res.status(401).json({
    "error": true,
    "message" : "the JWT cookie isn't exist"
  });
    // store the refreshToken from user and compare with DB
  const refreshToken = cookies.jwt;
    // verify token with jwt if exist
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      try{ 
        if (err) return res.status(403);
          // Get the database
        const db = req.db 
          // check for duplicate usernames in the db
        const UsersDB = db.collection('Users')
        const name = decoded.name
          // check if the user is exist
        const foundUser = await UsersDB.findOne({name});
          // the user is Forbidden 
        if (!foundUser) return res.status(403).json({
          "error" : true,
          "message": "the user is forbidden!"
        });
        // create new access jwt token
        const accessToken = jwt.sign(
          { "name": decoded.name },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
        );
          // send the new token
        res.status(200).json({
          error: false,
          accessToken
        })
      } catch(err){
        return res.status(500).json({
          "error": true,
          "message": 'Server error. Please try again later.',
        })
      }
    }
  );
}
// ****************************************** refresh the user token handler

export default { RefreshTokenHandler }