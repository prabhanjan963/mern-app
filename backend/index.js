import express from 'express'
import cors from 'cors'
import routes from './routes/router.js';
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

const __dirname = path.resolve();

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,"/client/dist")))

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,"client","dist","index.html"))
})

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(PORT, () => {
    console.log("server is running on PORT",PORT)
})