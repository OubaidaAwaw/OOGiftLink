  // import express
import express from 'express'

  // import express router
const router = express.Router();

  // import Logout controller
import LogoutController from '../Controllers/LogoutController.js'

router.post('/', LogoutController.handleLogout);

export default router;