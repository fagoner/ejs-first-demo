const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', 3000);

app.get('/', function (req, resp) {
    const title = "Favorite Albums";

    const albums = [
        { title: 'Ten', author: 'Pearl Jam' },
        { title: 'Audioslave', author: 'Audioslave' },
        { title: 'Justice for all', author: 'Metallica' },
        { title: 'Naugthy By Nature', author: 'Naughty By Nature' },
        { title: 'Dangerous', author: 'Michael Jackson' }
    ];


    resp.render('index', { title, albums: albums })
});

app.listen(app.get('port'), () => {
    console.log('Listening on port: ', app.get('port'));
})
console.log('hi');