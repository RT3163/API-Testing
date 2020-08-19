const express = require('express')
const app = express()

const postsRouter = require('./routes/posts')

const PORT = 8080

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to the API Testing.')
})

app.use('/posts', postsRouter)

app.listen(PORT)

module.exports = app