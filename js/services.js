'use strict';

/* Services */

angular.module('carinvServices', ['ngResource']).
    factory('Car', function($resource){
//    var data = $resource('cars/:carId.json', {}, {
//    var data = $resource('get_json.php', {}, {
//    var data = $resource('http://localhost/ucnload/get_json.php', {}, {
//        query: {method:'GET', params:{}, isArray:true}
//      query: {method:'GET', params:{carId:'cars'}, isArray:true}

//        var data = $resource('cars/:carId.json', {}, {
//        var data = $resource('http://localhost/ucnload/get_json.php', {}, {
        var data = $resource('ajax/getCars.php');
        data.query(function(data){
        	$scope.filteredItems = $scope.list.length; //Initially for no filter
        });
//    data.query(function(data){
//                    console.log(data.length);
//                }, function(err){
//                    alert('request failed');
//                });
//    for(var i = 0; i < data.length; i++) {
//      data[i]['n'] = 'FU';
//    }
//    console.log(data);
  return data;
});
