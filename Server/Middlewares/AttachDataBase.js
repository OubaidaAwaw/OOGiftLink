  // import client
import { getDatabase } from "./../Config/DB.js"

const attachDatabase = (req, res, next) => {
  try {
      // get the db and put it in the db req
    req.db = getDatabase()
    next()
  } catch (err) {
    console.error(err)
    res.status(500).json({
      error: true,
      message: 'Database unavailable',
    })
  }
}

export default attachDatabase