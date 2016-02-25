var mongoose = require('mongoose')
var model = require('../models/model.js')
function getCountry(req, res){
	model.findOne({'name': req.body.country}, function(err, doc){
		if(err) {
			console.log(err)
			res.send(err)
		}	
			res.send(doc)
	})

}







module.exports = {

		getCountry:getCountry
}	