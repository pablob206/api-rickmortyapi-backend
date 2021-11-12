const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api', require('./routes/character'));
app.use('/api', require('./routes/location'));
app.use('/api', require('./routes/episode'));

// app.use('/api', require('./routes/character/download'));

app.listen(process.env.PORT, () => {
    console.log(`Api rickmortyapi, run.. : ${ process.env.PORT }`);
});