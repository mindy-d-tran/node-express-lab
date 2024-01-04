const express = require('express');

const app = express();
const port = 3000;
// app.set('view enging', 'ejs');

app.get('/', (req,res)=>{
    console.log(req.url);
    // res.render('pages/index');
    res.send('hewo')
})
app.listen(port, () =>console.log('port is running'));