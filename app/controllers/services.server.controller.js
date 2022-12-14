/*
COMP 229 Assignment 2 - services.server.controller.js
Student Name: Kam Hung Chan (Karlis)
ID: 301232477
Update Date: October 15, 2022
*/

exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the services.ejs in views folder
    res.render('services', {
        title: "Kam's Portfolio",
        page: "Services", 
        serviceIcon1: "img/code.png",
        serviceIcon2: "img/itsupport.png",
        serviceIcon3: "img/dmarketing.png",
        serviceAlt1: "Icon of Coding",
        serviceAlt2: "Icon of IT Support",
        serviceAlt3: "Icon of Digital Marketing",
        logo: "img/logo.png",
        login: req.isAuthenticated(),
        username: req.body.username,
    });
    };
    