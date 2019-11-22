const express = require("express");
const router = express.Router();
const { userValidationRules, validate } = require('./validation')
const helper = require("../auth/helpers");

const userController = require("../controllers/userController")

router.post("/users/register", userValidationRules, validate, userController.register);
router.post("/users/authenticate", userController.authenticate);
router.get("/users/logout", userController.logout);
router.get("/users/protected", helper.ensureAuthenticated, userController.protectedTest); //test route
router.get("/users/unprotected", userController.unprotectedTest); //test route
router.get("/users/me", helper.ensureAuthenticated, userController.getMe);
router.get("/users/:id", helper.ensureAuthenticated, userController.getUser);


module.exports = router;