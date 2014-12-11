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