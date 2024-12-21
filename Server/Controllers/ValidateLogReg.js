  // import body to validate 
import { body } from 'express-validator'

const ValidateLogReg = [
  body('name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('User name is required when provided')
    .isAlphanumeric()
    .withMessage('User name should only contain letters and numbers.'),

  body('email')
    .notEmpty()
    .withMessage('the email is require')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
    
  body('password')
    .trim()
    .notEmpty()
    .withMessage('the password is require')
    .isLength({ min: 8, max: 70 })
    .withMessage('Password must be at least 8-70 characters long')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage('Password must be at least 6 characters long, include one letter and one number'),
]
export default ValidateLogReg 
