app.controller('DetailsController', function($scope, $routeParams, DataService){

  var idx = $routeParams.index;
  
  $scope.detailPerson = DataService.data[idx];
  
});