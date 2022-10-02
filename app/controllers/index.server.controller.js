exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        
    //to render the index.ejs in views folder
    res.render('index', {
        title: "Kam's Portfolio",
        statement: "State The Problem. Solve The Problem.", 
        img: "img/rings.gif",
        imgAlt: "Rings of problem stating and solving"
    });
    };
    