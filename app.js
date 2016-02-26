// requires \\
var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var controller = require('./controllers/controller.js')
var logger = require('morgan')
// create express app \\
var app = express();
mongoose.connect('mongodb://localhost/countryDB')

// app configuration \\
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

// routes \\

app.get('/', function(req, res){
	res.sendFile('/index.html', {root: './public'})
})

app.get('/api/load', controller.loadCountries)


app.get('/countries', function(req, res){
	res.send('TEST')
})

app.post('/api/country', controller.getCountry)

app.post('/api/addCountry', controller.newCountry)







var port = 3000
app.listen(port, function(){
	console.log('server running on port ' + port)
})