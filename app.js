require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Templating Engine Setup
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

app.use('/', require('./server/routes/main.route.js'));

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
	console.log(`Press Ctrl+C to quit.`);
});
