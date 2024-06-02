const router = require("express").Router();

const Major = require("../controllers/majorController")


router.get("/", Major.getAllMajors );
router.post("/", Major.createMajor);

module.exports = router;
