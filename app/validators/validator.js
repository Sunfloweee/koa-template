const { LinValidator } = require('lin-mizar')

class LoginValidator extends LinValidator {
    constructor() {
        super()
        console.log(this)
    }
}

module.exports = { 
    LoginValidator
}