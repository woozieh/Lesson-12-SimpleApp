// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const movies = [
    { title: 'Spider-Man: No Way Home', genre: 'Action', year: 2021 },
    { title: 'Interstellar', genre: 'Sci-Fi', year: 2014 },
    { title: 'Avengers: Endgame', genre: 'Action', year: 2019 },
    { title: 'Your Name', genre: 'Anime Movie', year: 2016 }
];

const tvShows = [
    { title: 'Stranger Things', genre: 'Sci-Fi', year: 2016 },
    { title: 'Wednesday', genre: 'Mystery', year: 2022 },
    { title: 'Friends', genre: 'Comedy', year: 1994 },
    { title: 'The Office', genre: 'Comedy', year: 2005 }
];

const anime = [
    { title: 'Demon Slayer', genre: 'Fantasy', episode: '15 / 26' },
    { title: 'One Piece', genre: 'Adventure', episode: '455 / 1120' },
    { title: 'Jujutsu Kaisen', genre: 'Supernatural', episode: '20 / 24' },
    { title: 'Naruto', genre: 'Action', episode: '22 / 220' }
];

app.get('/', (req, res) => {
    res.render('index', { movies: movies, tvShows: tvShows, anime: anime });
});

app.get('/movies', (req, res) => {
    res.render('movies', { movies: movies });
});

app.get('/tv-shows', (req, res) => {
    res.render('tv-shows', { tvShows: tvShows });
});

app.get('/anime', (req, res) => {
    res.render('anime', { anime: anime });
});

app.get('/watchlist', (req, res) => {
    res.render('watchlist');
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});