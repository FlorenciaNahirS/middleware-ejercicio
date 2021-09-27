const {validationResult} = require('express-validator');
const users = require('../data/users.json');

module.exports = {
    login:(req,res) => {
        return res.render('login', { title: 'Login - Balloons' });
    },
    processLogin: (req,res) => {
        let errors = validationResult(req);

        let user = users.find(user => user.username === req.body.username);

        if(errors.isEmpty()){
            return res.render('user',{
                title: 'Welcome! - Balloons',
                user : user.username
            })
        }else{
            return res.redirect('sorry')
        }
    },
    user:(req,res) => {
        return res.render('user', {
            title: 'Welcome! - Balloons'
        })
    },
    incorrectUser: (req,res) => {
        return res.render('sorry', { title: 'Sorry! - Balloons' });
    },
    register: (req,res) => {
        return res.render('register', { title: 'Register - Balloons' });
    }
}