const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
//view engine
app.set('view engine', 'ejs');

// middleware
app.use(morgan('short'));
app.use(express.static('./styles'));
// routes
app.get('/', (req,res)=>{
    console.log(req.url);
    res.render('pages/index');
})
app.get('/login', (req,res)=>{
    res.render('pages/login')
})
// automaticially redirect to the login page if it's not one of the routes above
app.all('*', (req,res)=>{
    res.redirect('/login');
})
app.listen(port, () =>console.log(`port is running ${port}`));
