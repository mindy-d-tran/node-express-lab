const express = require("express");
const morgan = require("morgan");

//exporting routes
const loginRoute = require("./routes/login");
// const welcomeRoute = require("./routes/welcome");

const app = express();
const port = 3000;
//view engine
app.set("view engine", "ejs");

// middleware
app.use(morgan("short"));
// store date from form
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./styles"));
app.use(express.static('./assets'));
// routes
// doesnt work if it's in another folder because it doesn't have access to the body
app.use("/", loginRoute);
app.get("/welcome", (req, res) => {
  res.render("pages/welcome");
});
app.post("/welcome", (req, res) => {
  console.log(req.body);
  res.send("successfully log in ");
});
app.get('/download', (req,res)=>{
  res.download('./assets/husband-builds-home-baby-bunnies.jpg', 'bunny');
})
// automaticially redirect to the login page if it's not one of the routes above
app.all('*', (req,res)=>{
  res.status(404)
    res.send('404 Page not found');
})
app.listen(port, () => console.log(`port is running ${port}`));
