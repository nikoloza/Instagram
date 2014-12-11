var app = angular.module('Wikipedia', []);


app.factory('searchArticle', function($http) {
    return function name(term) {
        $http.get("http://en.wikipedia.org/w/api.php")
            .success(function(data) {
                console.log(data);
            });
    };
});


app.controller('getArticle', function($scope, $http) {

    $scope.term = "Apple";

    // var req = {
    //     method: 'jsonp',
    //     url: 'http://en.wikipedia.org/w/api.php?action=opensearch&search=Apple&limit=2&namespace=0&format=json',
    //     // headers: {
    //     //     'Content-Type': 'application/json',
    //     //     'Access-Control-Allow-Credentials': true
    //     // },
    //     // data: {
    //     //     action: 'opensearch',
    //     //     format: 'json',
    //     //     search: encodeURI($scope.term),
    //     //     limit: 10
    //     // },
    //     responseType: 'json'
    // };

    // $http.jsonp('http://en.wikipedia.org/w/api.php', {
    //     'action': 'opensearch',
    //     'search': $scope.term,
    //     'limit': 2,
    //     'namespace': 0,
    //     'format': 'json'
    // }).success(function(data){
    //     console.log(data);
    // });

    $scope.$watch('term', function() {
        $http.jsonp('https://api.instagram.com/v1/users/search?q=' + $scope.term + '&client_id=74a1447737884721bc993537dab854de&callback=JSON_CALLBACK')
            .success(function(data) {
                $scope.users = data.data;
            });
    });

    // var url = 'http://en.wikipedia.org/w/api.php';

    // $http.jsonp(url)
    //     .success(function(data){
    //         console.log(data.found);
    //     });

});


// $.ajax({
//         url: 'http://en.wikipedia.org/w/api.php',
//         dataType: 'jsonp',
//         data: {
//             action: 'opensearch',
//             format: 'json',
//             search: encodeURI(term)
//         }
//     });

//# sourceMappingURL=app.map