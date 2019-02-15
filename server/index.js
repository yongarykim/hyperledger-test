const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

//Router 설정
const router = express.Router()

// CORS 설정
app.use(cors());

//컨트롤러 폴더 설정.
app.use('/', require('./controllers'));
//app.use(express.static(path.join(__dirname, '..', 'build/')));


// if you need api routes add them here
app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});