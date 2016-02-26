angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', '$http', function($scope, $http){
		var s = $scope
		
		$http.get('/api/load')
			 .then(function(serverData){
			 	s.array = serverData.data || []
			 })



		s.getCountries = function(){	
			$http.get('/countries')
				.then(function(serverData){
					console.log(serverData.data)
				})
		}

		s.findCountry = function(){
			$http.post('/api/country', s.search)
				 .then(function(serverData){
				 	if(serverData.data.err){
				 		console.log(serverData.data.err)
				 	}		
					else if(!serverData.data){
				 		console.log('no matches found')				
				 	}
					else{
						$http.post('/api/addCountry', serverData.data)
						  .then(function(data){						 	
						 	 s.array.push(data.data)						 	 
						  })				
					} 
				 })
				 
		}





	}])

		