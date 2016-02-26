var mongoose = require('mongoose')
var bigModel = require('../models/bigModel.js')
var smallModel = require('../models/smallModel.js')

function getCountry(req, res){
	bigModel.findOne({'name': req.body.country}, function(err, doc){
		if(err) {
			console.log('first psot'+err)
			res.send(err)
		}	
		
		if(doc)
			res.send(doc)
	})

}
function loadCountries(req, res){
	smallModel.find({}, function(err, doc){
		if(err){
			console.log(err)
			res.send(err)
		}
			res.send(doc)
	})
}

function newCountry(req, res){
	var item = new smallModel(req.body)
	item.save(function(err, doc){
		if(err){
			console.log('second post' + err)
			res.send(err)
		}
			res.send(doc)
	})
}


module.exports = {

		getCountry:getCountry,
		loadCountries:loadCountries,
		newCountry:newCountry
}	