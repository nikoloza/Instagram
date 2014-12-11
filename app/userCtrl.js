app.controller('userCtrl', function($scope, $http, $stateParams) {
    var id = $stateParams.id,
        term = $stateParams.term;

    $scope.$parent.term = term;

    $http.jsonp('https://api.instagram.com/v1/users/' + id + '?client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK')
        .success(function(data) {
            $scope.user = data.data;

            if(data.meta.code === 400) $scope.hidden = true;
        });

    $http.jsonp('https://api.instagram.com/v1/users/' + id + '/media/recent?client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK')
        .success(function(data) {
            $scope.pics = data.data;
        });
});