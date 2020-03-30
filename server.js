const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json());

app.use("*", cors())

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/expe', require('./routes/api/expe'))
app.use('/api/post', require('./routes/api/post'))
app.use('/api/book', require('./routes/api/book'))

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))