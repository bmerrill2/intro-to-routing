var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/people', {
      templateUrl: 'app/templates/list_template.html',
      controller: 'ListController'
    })
    .when('/details/:index', {
      templateUrl: 'app/templates/details_template.html',
      controller: 'DetailsController'
    })
    .when('/admin', {
      template: 'Yay, you are an admin {{Name}}',
      controller: 'AdminController',
      resolve: {
       resolveParametr: function () {
          return "Winner"
  }
  })
    .otherwise('/people')

}])