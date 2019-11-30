const express = require("express");
const router = express.Router();
const helper = require("../auth/helpers");

const sessionController = require("../controllers/sessionController")

router.post("/sessions/create", helper.ensureAuthenticated, sessionController.create);
router.get("/sessions", helper.ensureAuthenticated, sessionController.all);
router.get("/sessions/:id", helper.ensureAuthenticated, sessionController.detail);
router.post("/sessions/register", helper.ensureAuthenticated, sessionController.registration);
router.delete("/sessions/:id", helper.ensureAuthenticated, sessionController.delete);

module.exports = router;