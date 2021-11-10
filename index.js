const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/api/data', require('./routes/data'));

app.listen(process.env.PORT, () => {
    console.log(`Api rickmortyapi, run.. : ${ process.env.PORT }`);
});