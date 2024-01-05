const express = require('express');
const morgan = require('morgan');

const loginRoute = require('./routes/login')
const app = express();
const port = 3000;
//view engine
app.set('view engine', 'ejs');

// middleware
app.use(morgan('short'));
// app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./styles'));
// routes
app.use('/', loginRoute)
app.get('/welcome', (req,res)=>{
    res.render('pages/welcome');
})
app.post('/welcome', (req,res)=>{
    console.log(req.body);
    res.send('did it work?')
})
// automaticially redirect to the login page if it's not one of the routes above
// app.all('*', (req,res)=>{
//     res.redirect('/login');
// })
app.listen(port, () =>console.log(`port is running ${port}`));
