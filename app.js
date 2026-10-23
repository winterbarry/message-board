const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = 3000;

// configure EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//parse form data
app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// connect the router
app.use("/", indexRouter);

// start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
