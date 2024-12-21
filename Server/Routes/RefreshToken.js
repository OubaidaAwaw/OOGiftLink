  // import express
import express from 'express'

  // declare express router
const router = express.Router();

  // import Refresh Token controller
import RefreshTokenController from './../Controllers/RefreshTokenController.js'

  // import limitation
import RateLimitRequested from "./../Controllers/RateLimitRequest.js"

  // create get request for new user token
router.get('/',RateLimitRequested(15, 1), RefreshTokenController.RefreshTokenHandler);

export default router;