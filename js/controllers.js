'use strict';

/* Controllers */



function CarListCtrl($scope, $location, $routeParams, Car) { 

  $scope.cars = Car.query();
  $scope.trans = Car.query();
  $scope.bodys = Car.query();
  $scope.caps = Car.query();
  $scope.lays = Car.query();
//  $scope.orderProp = 'n';

  console.log($routeParams.page);

  if ($routeParams.page)
    $scope.currentPage = $routeParams.page-1;
  else
    $scope.currentPage = 0;

    $scope.pageSize = 5;


  $scope.$watch('cars', function (newValue) {

    $scope.carDealers = setFilter($scope.cars, 'carBrand');

  }, true);

  $scope.$watch('trans', function (newValue) {

    $scope.carTrans = setFilter($scope.trans, 'transmission');

  }, true);

  $scope.$watch('bodys', function (newValue) {

    $scope.carBodys = setFilter($scope.bodys, 'bodyStyle');

  }, true);

  $scope.$watch('caps', function (newValue) {

    $scope.carCaps = setFilter($scope.caps, 'capacity');

  }, true);

  $scope.$watch('lays', function (newValue) {

    $scope.carLays = setFilter($scope.lays, 'layout');

  }, true);

    

  $scope.$watch('orderProp', function (newValue) {
    if (typeof newValue == 'undefined')
      return;

    if (newValue.indexOf('-')==0)
    {
      newValue = newValue.replace('-', '');
      $scope.reverse = true;
    }
    else
    {
      $scope.reverse = false;
    }
    $scope.predicate = newValue;
  }, true);

  $scope.$watch('pageSize', function (newValue) {
    if (typeof newValue == 'undefined')
      return;
    if (typeof $scope.dealerFiltered == 'undefined')
      return;
    $scope.numPages = Math.ceil($scope.dealerFiltered.length / $scope.pageSize);

    if ($routeParams.page)
      $scope.currentPage = $routeParams.page-1;
    else
      $scope.currentPage = 0;

  }, true);

  $scope.$watch('currentPage', function (newValue) {
    if (typeof newValue == 'undefined')
      return;
//    console.log($routeParams.page);
//    $location.path('/cars/page/' + newValue);
//    $location.path('/cars/').search({page: 1});
//    $location.replace();
      $location.search('page', newValue+1);

  }, true);


  $scope.$watch('all', function (newValue) {
    if (typeof newValue == 'undefined') {
      return;
    }

    if (typeof newValue[0] == 'undefined') {
      //console.log(newValue[0]['d']);
      return;
    }

    $scope.data = [];
    var row = [];
    for(var i = 0; i < $scope.pageSize; i++)
    {
      if (typeof newValue[i] != 'undefined')
      {
           if (i % 3  == 0 && i)
           {
             $scope.data.push(row);
             var row = [];
           }
           row.push(newValue[i]);
      }
    }
    $scope.data.push(row);


  }, true);



    $scope.typeOptions = [
    { name: 'Feature', value: 'feature' },
    { name: 'Bug', value: 'bug' },
    { name: 'Enhancement', value: 'enhancement' }
    ];


  $scope.prevPage = function($event){
     console.log($event);
  }

}




//PhoneListCtrl.$inject = ['$scope', 'Phone'];



function CarDetailCtrl($scope, $routeParams, Car) {
    $routeParams.carId = 'cars1';
  $scope.car = Car.get({carId: $routeParams.carId}, function(car) {
//    $scope.mainImageUrl = car.images[0];
  });

  $scope.setImage = function(img) {
    $scope.mainImageUrl = img;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];


Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};


function setFilter(data, field)
{
  var options = [];
  var optionsCounter = [];
  for(var i = 0; i < data.length; i++)
  {
      var val = data[i][field];
    if (typeof optionsCounter[val] == 'undefined')
      optionsCounter[val] = 1;
    else
      optionsCounter[val]++;
    if(!options.contains(val))
      options.push(val);
  }
  options.sort();
  var optionsLables = [];
  for(var i = 0; i < options.length; i++)
  {
    var option = {};
    option.value = options[i];
    option.text = options[i] + ' (' + optionsCounter[options[i]] + ')';
    optionsLables.push(option);
  }
  return optionsLables;
}

function updateCounter(data, options, field)
{
  var optionsCounter = [];
  for(var i = 0; i < data.length; i++)
  {
    var val = data[i][field];
    if (typeof optionsCounter[val] == 'undefined')
      optionsCounter[val] = 1;
    else
      optionsCounter[val]++;
  }
//  console.log(optionsCounter);
  for(var i = 0; i < options.length; i++)
  {
    if (typeof optionsCounter[options[i].value] == 'undefined')
      optionsCounter[options[i].value] = 0;
    options[i].text = options[i].value + ' (' + optionsCounter[options[i].value] + ')';
  }
  return options;
}

/*

function setChecked(data)
{
  for(var i = 0; i < data.length; i++)
  {
    //data[i].checked = false;
  }
  return data;
}
*/
