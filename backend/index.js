import express from 'express'
import cors from 'cors'
import routes from './routes/router.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => {
    console.log("server is running on PORT",PORT)
})