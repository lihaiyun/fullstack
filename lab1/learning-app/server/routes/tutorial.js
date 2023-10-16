const express = require('express');
const router = express.Router();

let tutorialList = [];

router.post("/", (req, res) => {
    let data = req.body;
    tutorialList.push(data);
    res.json(data);
});

router.get("/", (req, res) => {
    res.json(tutorialList);
});

module.exports = router;