const express = require('express');
const mysql = require('mysql');
require('dotenv').config({path: './.env'});
const app = express();

app.use(express.static('./'));
app.use(express.json());

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' });
}

const errorHandle = (error , result, fields) => {
    if (error) {
        res.send(err.message);
        throw error;
    };
    res.send(results);
};

const dataBase = mysql.createConnection({
    host: "localhost",
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATA_BASE,
    multipleStatements: true
});

dataBase.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

////  GET requests by id
{
app.get('/songs/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM songs WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/users/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM users WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/artists/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM artists WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/albums/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM albums WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/playlists/:id', async (req, res) =>{
    dataBase.query('SELECT * FROM playlists WHERE id = ?', [req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// GET requests to the entire table
{
app.get('/songs', async (req, res) =>{
    dataBase.query('SELECT * FROM songs', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/users', async (req, res) =>{
    dataBase.query('SELECT * FROM users', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/artists', async (req, res) =>{
    dataBase.query('SELECT * FROM artists', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/albums', async (req, res) =>{
    dataBase.query('SELECT * FROM albums', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.get('/playlists', async (req, res) =>{
    dataBase.query('SELECT * FROM playlists', (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// POST requests
{
app.post('/songs', async (req, res) =>{
    dataBase.query('INSERT INTO songs VALUES ?', [req.body.songs], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/artists', async (req, res) =>{
    dataBase.query('INSERT INTO artists VALUES ?', [req.body.artists], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/users', async (req, res) =>{
    dataBase.query('INSERT INTO users VALUES ?', [req.body.users], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/albums', async (req, res) =>{
    dataBase.query('INSERT INTO albums VALUES ?', [req.body.albums], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.post('/playlists', async (req, res) =>{
    dataBase.query('INSERT INTO playlists VALUES ?', [req.body.playlists], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

//// DELETE requests
{
app.delete('/songs/:id', async (req, res) =>{
    dataBase.query('DELETE FROM songs WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/artists/:id', async (req, res) =>{
    dataBase.query('DELETE FROM artists WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/users/:id', async (req, res) =>{
    dataBase.query('DELETE FROM users WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/albums/:id', async (req, res) =>{
    dataBase.query('DELETE FROM albums WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.delete('/playlists/:id', async (req, res) =>{
    dataBase.query('DELETE FROM playlists WHERE id = ?', req.params.id, (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

}

//// PUT requests
{
app.put('/songs/:id', async (req, res) =>{
    dataBase.query('UPDATE songs SET name = ? , artist_id = ? , album_id = ? , uploaded_at = ? , length_seconds = ? , youtube_link = ? WHERE id = ?', [...req.body.songs , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/artists/:id', async (req, res) =>{
    dataBase.query('UPDATE artists SET name = ? , genre = ? , joined_at = ? WHERE id = ?', [...req.body.artists , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/users/:id', async (req, res) =>{
    dataBase.query('UPDATE users SET name = ? , email = ? , country = ? , created_at = ? , premium = ? WHERE id = ?', [...req.body.users , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/albums/:id', async (req, res) =>{
    dataBase.query('UPDATE albums SET name = ? , artist_id = ? , number_of_songs = ? , uploaded_at = ? WHERE id = ?', [...req.body.albums , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});

app.put('/playlists/:id', async (req, res) =>{
    dataBase.query('UPDATE playlists SET name = ? , user_id = ? , created_at = ? , public = ? WHERE id = ?', [...req.body.playlists , req.params.id], (error, results, fields) => {
        if (error) {
            res.send(error.message);
            throw error;
        };
        res.send(results);
      });
});
}

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})