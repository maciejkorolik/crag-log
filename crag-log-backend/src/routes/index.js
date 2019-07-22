const express = require("express");
const { climb, user } = require("../controllers");

const router = express.Router();

router.post("/user/login", user.userLogin);
router.post("/user/logout", user.userLogout);
router.post("/user/register", user.userRegister);

router.get("/climbs", climb.getAllClimbs);

router.post("/climb", climb.addClimb);
router.get("/climb/:id", climb.getSingleClimb);
router.put("/climb/:id", climb.updateClimb);
router.delete("/climb/:id", climb.deleteClimb);

module.exports = router;
