  // import express
import express from "express"
  // import server error handlers
import ServerError from './Middlewares/ServerError.js'
  // import route errors handler
import RoutesError from './Middlewares/RoutesError.js'
  // import start server configuration
import StartServer from './Config/StartServer.js'
  // import cors
import Cors from './Middlewares/CorsOptions.js'
  // import express.json with config middleware
import VerifyJson from './Middlewares/VerifyJson.js'
  // import helmet
import helmet from 'helmet'
  // import compressor middleware
import Compressor from './Config/Compress.js'
  // import sinitise html
import SinitiseBody from './Middlewares/SinitiseHtml.js'
  // import attach db
import AttachDataBase from "./Middlewares/AttachDataBase.js"
  // import cookieParser to use cookies
import cookieParser from "cookie-parser"
  // import jwt verifier
import verifyJWT from "./Middlewares/verifyJWT.js"
  // import Auth Routes
import Register from './Routes/Register.js'
import Login from './Routes/Login.js'
import Logout from './Routes/Logout.js'
import RefreshToken from './Routes/RefreshToken.js'
  // imoport account route
import Account from './Routes/api/Account.js'
  // import Search route
import Search from "./Routes/api/Search.js"
  // import Gifts route
import Gifts from './Routes/api/Gifts.js'
  // import Comments route
import Comments from "./Routes/api/Comments.js"
  // import modules
import path from "path"
import { fileURLToPath } from 'url';
  // declare the server app
const app = express()
  // use static middleware
app.use("/", express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), "public")))
  // Cross Origin Resource Sharing middleware
app.use(Cors)
  // json middleware
app.use(VerifyJson)
  // built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }))
  // helmet middleware CSP
app.use(helmet())
  // cookieParser middleware
app.use(cookieParser());
  // compress the reqres
app.use(Compressor)
  // middleware for sanitizing request body
app.use(SinitiseBody)
  // attachDatabase to use in other middleware
app.use(AttachDataBase)
  // logout page route
app.use("/logout" , Logout)
  // registration route
app.use("/register", Register)
  // login route
app.use("/login", Login)
  // refresh token route
app.use('/refresh', RefreshToken)
  // verifyJWT before all endpoints for more secure
app.use(verifyJWT)
  //  **** ENDPOINTS
  // ** Acount
app.use('/account', Account)
  // ** Search
app.use('/search', Search)
  // ** Gifts
app.use('/gifts', Gifts)
  // ** Comments
app.use('/comments', Comments)
  // [+499] server errors handler
app.use(ServerError)
  // router error 404 not found
app.all('*', RoutesError)
  // start the server and configure db
StartServer(app)