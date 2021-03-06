var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session')
    cookieParser = require('cookie-parser');


module.exports = function() {
    var app = express();
    app.use(bodyParser.urlencoded({
        extended: true
}));

    app.use(cookieParser());
    app.use(bodyParser.json());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    require('../app/routes/ecomm.server.routes.js')(app);
    require('../app/routes/choc.server.routes.js')(app);
    require('../app/routes/pasteries.server.routes.js')(app);
    require('../app/routes/cakes.server.routes.js')(app);
    require('../app/routes/recipies.server.routes.js')(app);
    require('../app/routes/glob.cart.route.js')(app);
    require('../app/routes/del.cart.route.js')(app);
    
    app.use(express.static('./public'));

    return app;
};