const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Run. Running.')
})

const PORT = process.env.PORT || 5000;

app.listen(() => console.log(`Server started in port ${PORT}`))