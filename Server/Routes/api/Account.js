  // import express
import express from "express"

  // declare express router
const router = express.Router()

  // import controller
import AccountController from "./../../Controllers/AccountController.js"

  // import limitation
import RateLimitRequested from "./../../Controllers/RateLimitRequest.js"

router.get('/', AccountController.GetAccount)

router.put('/',RateLimitRequested(60, 3), AccountController.UpdateAccount)

export default router