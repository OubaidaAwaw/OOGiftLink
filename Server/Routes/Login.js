  // import express
import express from "express"

  // declare express router
const router = express.Router()

  // import Login controller
import LoginController from "../Controllers/LoginController.js"

  // import limitation
import RateLimitRequested from "./../Controllers/RateLimitRequest.js"

  // import Validate Log && Reg
import ValidateLogReg from './../Controllers/ValidateLogReg.js'

  // create post request for Login
router.post('/', RateLimitRequested(60,3), ValidateLogReg, LoginController.LoginHandler)

export default router