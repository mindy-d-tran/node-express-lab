const express = require("express");
//create a router lika a mini app
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('pages/index');
})

module.exports = router;