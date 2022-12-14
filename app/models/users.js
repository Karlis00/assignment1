/*
COMP 229 Assignment 2 - user.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/

//require modules
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            require: 'Username is required.'
        },
        email:
        {
            type: String,
            default: '',
            trim: true,
            require: 'Email is required.'
        },
        displayName:
        {
            type: String,
            default: '',
            trim: true,
            require: 'Display name is required.'
        },
        created:
        {
            type: Date,
            default: Date.now,
        },
        update:
        {
            type: Date,
            default: Date.now,
        }
    },
    {
        collection: 'users'
    }
);

//configure options for User Model

let options = ({missingPasswordError: 'Wrong or missing password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);