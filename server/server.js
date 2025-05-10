import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./configs/mongodb.js"
import { clerkwebhooks } from "./controllers/webhooks.js.js"

const app = express()

// Connect to db
await connectDB()

//middlewares

app.use(cors())

//Routes

app.get('/',(req,res)=>{
    res.send("api working");
})

app.post('/clerk',express.json(),clerkwebhooks)

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`server is listening in port ${PORT}` )
})
