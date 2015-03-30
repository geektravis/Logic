angular.module('index').config(function($stateProvider) {
  $stateProvider.state('index', {
    url: '/',
    views: {
      main: {
        controller: 'IndexController',
        templateUrl: 'index/index.tpl.html'
      }
    },
    data: {
      pageTitle: 'Home'
    }
  });
});