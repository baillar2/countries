angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', '$http', function($scope, $http){
		var s = $scope
		s.array = []
		s.loadCountries = function(){	
			$http.get('/countries')
				.then(function(serverData){
					console.log(serverData.data)
				})
		}

		s.findCountry = function(){
			$http.post('/api/country', s.search)
			.then(function(serverData){
				s.returnCountry = serverData.data
				s.array.push(s.returnCountry)
				s.returnCountry = {}
			})
		}





	}])

		