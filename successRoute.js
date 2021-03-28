const router = require('express').Router()

router.get('/success', function (request, response) {
    response.render('success', {})
})

module.exports = {
    router
}