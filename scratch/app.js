var app = angular.module('Instagram', ['ui.router']);
app.controller('listCtrl', function($scope, $http, $state, $stateParams) {
    $scope.term = "Apple";

    $scope.$watch('term', function() {
        $http.jsonp('https://api.instagram.com/v1/users/search?q=' + $scope.term + '&client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.users = data.data;
            });
    });

    $scope.goHome = function(){
        $state.go('index');
    };
});
app.controller('userCtrl', function($scope, $http, $stateParams) {
    var id = $stateParams.id,
        term = $stateParams.term;

    $scope.$parent.term = term;

    $http.jsonp('https://api.instagram.com/v1/users/' + id + '?client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK')
        .success(function(data) {
            $scope.user = data.data;

            if(data.meta.code === 400) $scope.hidden = true;
        });
});
app.factory('usersSvc', function($http) {
    return function name(term) {
        $http.get("http://en.wikipedia.org/w/api.php")
            .success(function(data) {
                console.log(data);
            });
    };
});

//# sourceMappingURL=app.map