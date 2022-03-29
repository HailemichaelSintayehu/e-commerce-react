
const express = require("express");

const router = express.Router();

const {register,login} = require('../Controllers/Authcontrollers.js')

router.post('/products')

router.post("/register",register)

router.get("/login",login)





module.exports = router;