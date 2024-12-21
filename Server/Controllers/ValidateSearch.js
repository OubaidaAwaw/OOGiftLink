  // import body to validate 
import { body } from 'express-validator'

const ValidateSearch = [
  body('title')
    .optional()
    .notEmpty()
    .withMessage('User title is required when provided')
    .isAlphanumeric()
    .withMessage('User title should only contain letters and numbers.'),
  body('catigury')
    .trim()
    .notEmpty()
    .withMessage('the catigury is require'),
  body('status')
    .trim()
    .notEmpty()
    .withMessage('the status is require')
]

export default ValidateSearch 
