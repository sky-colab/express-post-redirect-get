const router = require('express').Router()
const { body, validationResult } = require('express-validator')

const validate = (method) => {
    switch (method) {
        case 'text': {
            return [
                body('text', 'Text is too long').isLength({ max: 10 }),
            ]
        }
    }
}

router.get('/test', function (request, response) {
    response.render('enterTextForm', {})
})

router.post('/test', validate("text"), function (request, response) {
    const errors = validationResult(request)

    if (!errors.isEmpty()) {
        
        response.render('enterTextForm', { error: errors.array()[0].msg })
        return
    }
    response.redirect('/success')
})

module.exports = {
    router
}