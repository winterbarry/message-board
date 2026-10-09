const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  res.send(
    messages.map((message) => `${message.user}: ${message.text}`).join("\n"),
  );
});

module.exports = router;
