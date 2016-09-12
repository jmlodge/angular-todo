angular.module("UserService", [])
	.factory("UserAPIService", function($http) {

		UserAPIService = {
			callAPI: function(url, data) {
				return $http.post(url, data);
			}
		}
		return UserAPIService;
	});

angular.module("TodoServices", [])
	.factory("TodoAPIService", function($http) {
		TodoAPIService = {
			getTodos: function(url, data, token) {
				header = "authorization: JWT " + token;
				return $http.get(url, {params:{"username": data}}, header);
			},
			creatTodo: function(url, data, token) {
				header = "authorization: JWT " + token;
				return $http.post(url, data, header);
			}	
		};
		return TodoAPIService;
	});