  // import body to validate 
import { body } from 'express-validator'

const ValidatAccount = [
  body('name')
    .notEmpty()
    .withMessage('User name is required when provided')
    .isAlphanumeric()
    .withMessage('User name should only contain letters and numbers.'),
  body('email')
    .notEmpty()
    .withMessage('the email is require')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail()
]
export default ValidatAccount 
