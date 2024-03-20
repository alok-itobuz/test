import express from 'express'
import * as conn from './db/conn.js'
import userRouter from './routes/userRoutes.js'
import anotherRouter from './routes/anotherRoutes.js'

const app = express()

const port = 9000

// middlewares
app.use(express.json())

// routes
app.use('/user', userRouter)
app.use('/another', anotherRouter)

app.listen(port, () => {
    console.log('Listening at port ' + port)
})