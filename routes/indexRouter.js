const express = require("express");
const router = express.Router();

// sample messages
const messages = [
  {
    text: "Hello everyone!",
    user: "Alice",
    added: new Date(),
  },
  {
    text: "Welcome to the message board.",
    user: "Bob",
    added: new Date(),
  },
];

// display main message board
router.get("/", (req, res) => {
  res.render("index", {
    title: "Message Board",
    messages: messages,
  });
});

module.exports = router;
