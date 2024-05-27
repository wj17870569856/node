const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('******* login router ********')
})

router.get('/abc', (req, res) => {
    res.send('******* login router  abc ********')
})

module.exports = router;