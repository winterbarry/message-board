const express = require("express");
const router = express.Router();

// sample messages
const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  console.log("request successful");

  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form");
});

router.post("/new", (req, res) => {
  console.log("POST /new received");
  console.log("Form data:", req.body);

  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;

  messages.push({
    id: messages.length,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

// to open one message
router.get("/message/:id", (req, res) => {
  const messageId = Number(req.params.id); // extract id of requested message
  const message = messages.find((msg) => msg.id === messageId); // see if there is matching message in messages array

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", {
    title: "Message Details",
    message: message,
  });
});

module.exports = router;
