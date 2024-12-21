  // import compressor
import compressor from "compression"

export default compressor({
  level: 6,
  threshold: -1,  // default
  filter: (req ,res) =>{
    if (req.headers['x-no-compression']) {
        // don't compress responses with this request header
      return false
    }
      // fallback to standard filter function
    return compressor.filter(req, res)
  }
})