  // error server middleware
const ServerError = (req, res) => {
    // send error
  res.status(500).json({
    "error": true,
    "message": "internal server error!!"
  })
}
export default ServerError