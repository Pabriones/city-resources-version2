const express = require('express');

const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('API RUNNINGn'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));
