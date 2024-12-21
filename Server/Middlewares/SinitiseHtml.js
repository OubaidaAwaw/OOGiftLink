  // import the sanitizer
import sanitizeHtml from "sanitize-html"

  // loop on all the content in the body object
const sanitizeObject = (obj, res) => {
  for (const key in obj){
    if (typeof obj[key] === "string"){
      obj[key] = sanitizeHtml(obj[key]) || "" // sanitize all strings
      if(!sanitizeHtml(key)) return res.status(403).json({
        error: true,
        message: "you are forbidden don't try again."
      })
    } else if (typeof obj[key] === "object" && obj[key] !== null){
        // recursively sanitize objects
      sanitizeObject(obj[key])
    }
  }
}

  // sanitizing request body
const SinitizeBodyTexts = async (req, res, next) => {
    // check if the body is object
  if (req.body && typeof req.body === "object") {
      // sanitize each field in the body
    await sanitizeObject(req.body, res)
  }
  next()
}

export default SinitizeBodyTexts