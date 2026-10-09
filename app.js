const express = require("express");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// serve static files, such as CSS
app.use(express.static(path.join(__dirname, "public")));

// form data logic here

// router
app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Message app listening on port ${PORT}`);
});
