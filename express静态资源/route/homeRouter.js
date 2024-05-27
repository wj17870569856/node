const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('****** home router ******');
})

router.get('/abc', (req, res) => {
    res.send('****** home router abc ******');
})

module.exports = router;