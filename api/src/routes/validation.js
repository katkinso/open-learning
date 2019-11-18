const {check, validationResult} = require('express-validator');

const userValidationRules = [
        check('email').isEmail()
            .withMessage('Must be a valid email')
            .exists()
            .withMessage('Email is required'),
        check('password').isLength({ min: 5 })
            .withMessage('Must be at least 6 characters long')
            .exists()
            .withMessage('Password is required'),
        check('passwordConfirmation', 'passwordConfirmation does not equal password')
            .exists()
            .custom((value, { req }) => value === req.body.password)
 ]


const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        return next()
    }

    const extractedErrors = []

    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    
    return res.status(422).json({
        errors: extractedErrors,
    })
 }

 module.exports = {
    userValidationRules,
    validate
 }
