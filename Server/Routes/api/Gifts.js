  // import express
import express from "express"

  // declare express router
const router = express.Router()

  // import controller
import GiftsController from "./../../Controllers/GiftsController.js"

  // import validator for body
import ValidateSearch from './../../Controllers/ValidateSearch.js'
import ValidatAccount from './../../Controllers/ValidatAccount.js'

  // import multer
import Multer from "./../../Middlewares/Multer.js"

router.get('/:id', GiftsController.GetGiftById)

router.delete('/:id', GiftsController.DeleteGiftById)

router.get('/', GiftsController.GetGifts)

router.post('/', Multer, ValidateSearch, GiftsController.CreateGift)

router.put('/:id',ValidatAccount, GiftsController.UpdateGift)

export default router