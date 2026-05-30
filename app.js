// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const watchlist = [];
const watched = [];
const watching = [];
const favourites = [];

const movies = [
    {
        title: 'Spider-Man: No Way Home',
        image: '/images/spiderman.jpg',
        slug: 'spiderman',
        type: 'Movie',
        genre: 'Action',
        year: 2021,
        duration: '2h 28m',
        rating: '8.2/10',
        description: 'Peter Parker faces problems after his identity is revealed. He asks Doctor Strange for help, but things go wrong and visitors from other worlds appear.'
    },
    {
        title: 'Interstellar',
        image: '/images/interstellar.jpg',
        slug: 'interstellar',
        type: 'Movie',
        genre: 'Sci-Fi',
        year: 2014,
        duration: '2h 49m',
        rating: '8.6/10',
        description: 'A group of explorers travel through space to find a new home for humans as Earth becomes harder to live on.'
    },
    {
        title: 'Avengers: Endgame',
        image: '/images/endgame.jpg',
        slug: 'avengers',
        type: 'Movie',
        genre: 'Action',
        year: 2019,
        duration: '3h 1m',
        rating: '8.4/10',
        description: 'The Avengers come together again to undo the damage caused by Thanos and save the universe.'
    }
];

const tvShows = [
    {
        title: 'Stranger Things',
        image: '/images/strangerthings.jpg',
        slug: 'stranger-things',
        type: 'TV Show',
        genre: 'Sci-Fi',
        year: 2016,
        duration: '4 Seasons',
        rating: '8.7/10',
        description: 'A group of friends discover strange supernatural events happening in their small town.'
    },
    {
        title: 'Wednesday',
        image: '/images/wednesday.jpg',
        slug: 'wednesday',
        type: 'TV Show',
        genre: 'Mystery',
        year: 2022,
        duration: '1 Season',
        rating: '8.1/10',
        description: 'Wednesday Addams joins Nevermore Academy and investigates a mystery connected to her family.'
    }
];

const anime = [
    {
        title: 'Demon Slayer',
        image: '/images/demonslayer.jpg',
        slug: 'demon-slayer',
        type: 'Anime',
        genre: 'Fantasy',
        year: 2019,
        duration: '26 Episodes',
        rating: '8.6/10',
        description: 'Tanjiro becomes a demon slayer after his family is attacked and his sister is turned into a demon.'
    },
    {
        title: 'One Piece',
        image: '/images/onepiece.jpg',
        slug: 'one-piece',
        type: 'Anime',
        genre: 'Adventure',
        year: 1999,
        duration: '1000+ Episodes',
        rating: '9.0/10',
        description: 'Luffy and his pirate crew travel across the sea to find the legendary treasure called One Piece.'
    }
];

const allTitles = movies.concat(tvShows, anime);

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

app.get('/details/:slug', (req, res) => {
    const selectedTitle = allTitles.find(item => item.slug === req.params.slug);
    res.render('details', { item: selectedTitle });
});

app.post('/add-favourite', (req, res) => {
    const selectedTitle = allTitles.find(item => item.slug === req.body.slug);
    favourites.push(selectedTitle);
    res.redirect('/watchlist');
});

app.post('/add-watching', (req, res) => {
    const selectedTitle = allTitles.find(item => item.slug === req.body.slug);
    watching.push(selectedTitle);
    res.redirect('/watchlist');
});

app.post('/add-watched', (req, res) => {
    const selectedTitle = allTitles.find(item => item.slug === req.body.slug);
    watched.push(selectedTitle);
    res.redirect('/watchlist');
});

app.get('/watchlist', (req, res) => {
    res.render('watchlist', {
        favourites: favourites,
        watching: watching,
        watched: watched
    });
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});