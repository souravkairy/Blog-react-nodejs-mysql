const express = require('express')
const app = express()
const db = require('./models')
const cors = require('cors')


app.use(express.json())
app.use(cors())

//routers
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter)

const commentsRouter = require('./routes/Comments')
app.use('/comments', commentsRouter)


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('server is running')
    })
})





