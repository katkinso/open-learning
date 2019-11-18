const express = require("express");
const router = express.Router();
const { userValidationRules, validate } = require('./validation')
const helper = require("../auth/helpers");

const userController = require("../controllers/userController")

router.post("/users/register", userValidationRules, validate, userController.register);
router.post("/users/authenticate", userController.authenticate);
router.get("/users/logout", userController.logout);
router.get("/users/protected", helper.ensureAuthenticated, userController.protectedTest); //test route


module.exports = router;