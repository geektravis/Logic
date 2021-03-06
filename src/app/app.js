angular.module('raybold-logic', [
    'templates-app',
    'templates-common',
    'ui.router',
    'ngDragDrop',
    'index'
])
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    })
    .controller('AppController', function ($scope) {
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | Logic';
            }
        });
    });
