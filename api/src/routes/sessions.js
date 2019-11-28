const express = require("express");
const router = express.Router();
const helper = require("../auth/helpers");

const sessionController = require("../controllers/sessionController")

router.post("/sessions/create", helper.ensureAuthenticated, sessionController.create);
router.get("/sessions", helper.ensureAuthenticated, sessionController.all);
router.get("/sessions/:id", helper.ensureAuthenticated, sessionController.detail);

module.exports = router;