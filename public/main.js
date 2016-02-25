angular.module('moduleOne', [])

angular.module('moduleOne')
	.controller('controllerOne', ['$scope', '$http', function($scope, $http){
		var s = $scope
		
		s.loadCountries = function(){	
			$http.get('/countries')
				.then(function(serverData){
					console.log(serverData.data)
				})
		}

	}])