  // import JWT lib
import jwt from "jsonwebtoken"

  // load environment variables
import dotenv from 'dotenv'
dotenv.config();

  // JWT verify handler
const verifyJWT = (req, res, next) => {
    // check if the token header is exist
  const reqHeader = req.headers.authorization || req.headers.Authorization
  if(!reqHeader?.startsWith('Bearer ')) return res.sendStatus(401)
    // check the token
  const token = reqHeader.split(" ")[1]
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    (err, decoded) => {
        // invalid token
      if(err) return res.status(430).json({
        error: true,
        message: "the user is not authorized!"
      })
        // get the data from the decoded instead
      req.name = decoded.name
      next()
    }
  )
}

export default verifyJWT 