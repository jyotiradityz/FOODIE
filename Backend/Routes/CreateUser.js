const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const { body, validationResult } = require('express-validator');
require('dotenv').config();
const jwtSecret=process.env.JWT;
const bcypt = require("bcryptjs")
const jwt=require("jsonwebtoken")



router.post('/createuser', [
  body('email').isEmail(),
  body('name').isLength(),
  body('password', 'Incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const salt=await bcypt.genSalt(10);
  let securePassword=await bcypt.hash(req.body.password,salt);

  try {
    await User.create({
      name: req.body.name,
      password: securePassword,
      email: req.body.email,
      location: req.body.location,
    });
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

router.post('/loginuser', [
  body('email').isEmail(),
  body('password', 'Incorrect Password').isLength({ min: 5 }),
], async (req, res) => {
  let email = req.body.email
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({ errors: "Incoorect Creds" })
    }
    const pwdCompare=await bcypt.compare(req.body.password,userData.password)

    if (!pwdCompare) {
      return res.status(400).json({ errors: "Incoorect Creds" })
    }

    const data={
      user:{
        id:userData.id
      }
    }

    const authToken=jwt.sign(data,jwtSecret)


    return res.json({ success: true,authToken:authToken })
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

module.exports = router;