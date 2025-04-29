const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
	res.render('index.ejs');
});
router.get('/about', (req, res) => {
	res.render('about.ejs');
});

module.exports = router;
