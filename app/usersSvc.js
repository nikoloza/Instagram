app.factory('usersSvc', function($http) {
    return function name(term) {
        $http.get("http://en.wikipedia.org/w/api.php")
            .success(function(data) {
                console.log(data);
            });
    };
});
