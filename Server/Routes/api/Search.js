  // import express
import express from "express"

  // declare express router
const router = express.Router()

  // import controller
import SearchController from "./../../Controllers/SearchController.js"

  // import validator
import ValidateSearch from './../../Controllers/ValidateSearch.js'

router.post('/', ValidateSearch, SearchController)

export default router