exports.render = function(req, res) {
	    	res.render('pasteries', {
    		title: 'The Baking Room',
    		user: req.user ? req.user.username : ''
    		});
};
