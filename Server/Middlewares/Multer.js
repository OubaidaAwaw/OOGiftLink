  // import multer lib
import multer from 'multer'
  // import path
import path from "path"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'Server/public/Images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname +"_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

export default upload.single('photo')