const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About Me'});
});

app.get('projects', (req, res) => {
    res.render('projects', {title: 'Projects'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});

app.use((req, res) => {
    res.status(404).render('404', {title: '404 - Page Not Found'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});

