module.exports = function(app) {
    var index = require('../controllers/index.server.controller'),
    aboutMe = require('../controllers/aboutMe.server.controller'),
    projects = require('../controllers/projects.server.controller'),
    services = require('../controllers/services.server.controller'),
    contact = require('../controllers/contact.server.controller'),
    login = require('../controllers/login.server.controller'),
    business = require('../controllers/business.server.controller')
    app.get('/', index.render);
    app.get('/aboutMe', aboutMe.render);
    app.get('/projects', projects.render);
    app.get('/services', services.render);
    app.get('/contact', contact.render);
    app.get('/login', login.render);
    app.get('/business', business.render);
    };