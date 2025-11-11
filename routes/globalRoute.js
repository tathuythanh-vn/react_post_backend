const express = require("express");
const posts = require("../mockData/posts");
const users = require("../mockData/users");
const router = express.Router();

router.get("/users", (req, res) => {
    res.json(users);
})
router.get("/posts", (req, res) => {
    res.json(posts);
})

module.exports = router;