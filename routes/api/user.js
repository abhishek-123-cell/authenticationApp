const express = require("express");
const router = express.Router()
const apiController=require('../../controller/api/userApi');
router.get("/",apiController.index)
router.get("/login", () => {});
router.post("/signup", apiController.signup);

module.exports = router;
// apiController.signup;