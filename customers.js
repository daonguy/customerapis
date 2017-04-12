var cloudant = require('cloudant')(cloudantService.credentials.url);
exports.cloudant = cloudant;
var customerDb = cloudant.use('customers');
exports.customerDb = customerDb;

//list all the database contents.
exports.list = function(req, res) {
    customerDb.list({include_docs: true}, function(err, body/*, headers*/) {
	    if (!err) {
	        res.send(body);
	        return;
	    }
	   	res.send({msg:'Error listing items: ' + err});
    });
};
