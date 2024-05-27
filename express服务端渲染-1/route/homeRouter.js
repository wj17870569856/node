const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('****** home router ******');
})

router.get('/abc', (req, res) => {
    res.send('****** home router abc ******');
})

router.get('/list', (req, res) => {
    res.send(['111', '222', '333'])
})

module.exports = router;