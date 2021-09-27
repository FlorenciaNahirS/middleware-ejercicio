const {body} = require('express-validator');
const users = require('../data/users.json');

module.exports = [
    body('username')
        .custom((value,{req}) => {
            let user = users.find(user => user.username === value && user.password == req.body.password);
            if(user){
                return true
            }else{
                return false
            }
        })
]