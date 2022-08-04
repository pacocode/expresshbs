const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const urls = [
        {origin: "www.google.com.mx", shortURL: "Short route"},
        {origin: "www.google.com.mx", shortURL: "Short route"},
        {origin: "www.google.com.mx", shortURL: "Short route"}
    ]
    //res.send('Ruta raiz');
    res.render('home', {urls: urls});
});



module.exports = router