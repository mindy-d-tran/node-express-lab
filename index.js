const express = require("express");
const morgan = require("morgan");

//exporting routes
const loginRoute = require("./routes/login");
const welcomeRoute = require("./routes/welcome");

const app = express();
const port = 3000;
//view engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("short"));
// store date from form
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./styles"));

// routes
app.use("/", loginRoute);
app.use("/welcome", welcomeRoute);
// automaticially redirect to the login page if it's not one of the routes above
// app.all('*', (req,res)=>{
//     res.redirect('/login');
// })
app.listen(port, () => console.log(`port is running ${port}`));
