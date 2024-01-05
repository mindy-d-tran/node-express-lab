const express = require("express");
//create a router lika a mini app
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('getting user');
})

module.exports = router;