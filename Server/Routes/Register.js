  // import express
import express from 'express'
  // import express router
const router = express.Router();

  // import Register controller
import RegisterPageCont from "./../Controllers/RegisterController.js"

  // import limitation
import RateLimitRequested from "./../Controllers/RateLimitRequest.js"

  // import Validate Log && Reg
import ValidateLogReg from './../Controllers/ValidateLogReg.js'

  // declare the router route
router.post('/', RateLimitRequested(15,2), ValidateLogReg, RegisterPageCont.NewUserHandler)

export default router