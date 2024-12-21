  // import CORS allowed origins
import allowedOrigins from '../Config/AllowedOrigins.js'
  // import cors lib
import cors from 'cors'

  // check if the origin is allowed by cors
const CorsOptions = cors({
  origin: (origin, callback) => {
    if(allowedOrigins.indexOf(origin) !== -1 || !origin)
      callback(null, true)
    else
      callback(new Error("Not allowed by CORS"))
  },
  methods: "GET,PUT,POST,DELETE",
  credentials: true,              // Allow cookies
  optionsSuccessStatus: 200
})

export default CorsOptions