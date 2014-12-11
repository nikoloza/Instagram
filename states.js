app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: '/app/list.html'
        })
        .state('user', {
            url: '/user/:term/:id',
            templateUrl: '/app/user.html',
            controller: 'userCtrl'
        });

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
});