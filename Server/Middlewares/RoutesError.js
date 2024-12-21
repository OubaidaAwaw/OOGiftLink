
// routes error middleware
const RoutesError = (req, res) => {
  res.status(404);
  if (req.accepts('json')) {
    res.json({
      "error": true,
      "message": "404 Not Found" 
    });
  } else {
    res.type('txt').send("404 Not Found");
  }
}
export default RoutesError