const express = require('express');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
// middleware
app.use(morgan('short'));

app.get('/', (req,res)=>{
    console.log(req.url);
    res.render('pages/index');
})
app.listen(port, () =>console.log('port is running'));
