const express = require('express')
const mustacheExpress = require('mustache-express')

const enterTextRoute = require('./enterText')
const successRoute = require('./successRoute')

const app = express()
app.set('views', `${__dirname}/views`)
app.set('view engine', 'mustache')
app.engine('mustache', mustacheExpress())
app.use (express.urlencoded( {extended : true} ) )

app.use ('/', enterTextRoute.router)
app.use ('/', successRoute.router)

app.listen(3000,function() {
    console.log("Server started")
})