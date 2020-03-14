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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`))