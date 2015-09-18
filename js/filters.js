'use strict';

/* Filters */

var myApp = angular.module('carinvFilters', []);

myApp.filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

myApp.filter('searchCarBody', function() {
    return function(input, query) {
    if (!query)
        return input;
    var output = [];
    for(var i = 0; i < input.length; i++) {
        if (input[i].body == query)
            output.push(input[i]);
    }
        return output;
    }
});

myApp.filter('filterYear', function() {
    return function(input, query) {
//      console.log(query);
    if (!query)
        return input;
    var output = [];
    for(var i = 0; i < input.length; i++) {
        if (input[i].y == query)
            output.push(input[i]);
    }
        return output;
    }
});

myApp.filter('filterLay', function() {
    return function(input, query) {
      if (!query)
          return input;
      var checked = [];
      for(var i = 0; i < query.length; i++)
      {
        if (query[i].checked)
          checked.push(query[i].value);
      }
      if (!checked.length)
          return input;
      var output = [];
      for(var i = 0; i < input.length; i++)
      {
        if (checked.contains(input[i].layout))
        {
          output.push(input[i]);
        }
      }
//      console.log(output.length);
//      $rootScope.lastfilter = 'filterDealer';
    return output;
    }
});

myApp.filter('filterCap', function() {
    return function(input, query) {
      if (!query)
          return input;
      var checked = [];
      for(var i = 0; i < query.length; i++)
      {
        if (query[i].checked)
          checked.push(query[i].value);
      }
      if (!checked.length)
          return input;
      var output = [];
      for(var i = 0; i < input.length; i++)
      {
        if (checked.contains(input[i].capacity))
        {
          output.push(input[i]);
        }
      }
//      console.log(output.length);
//      $rootScope.lastfilter = 'filterDealer';
    return output;
    }
});

myApp.filter('filterTran', function() {
    return function(input, query) {
    if (!query)
        return input;
    var checked = [];
    for(var i = 0; i < query.length; i++)
      {
        if (query[i].checked)
          checked.push(query[i].value);
      }
      if (!checked.length)
          return input;
      var output = [];
      for(var i = 0; i < input.length; i++)
      {
        if (checked.contains(input[i].transmission))
        {
          output.push(input[i]);
        }
      }
//      console.log(output.length);
//      $rootScope.lastfilter = 'filterDealer';
    return output;
    }
});

myApp.filter('filterBody', function() {
    return function(input, query) {
    if (!query)
        return input;
    var checked = [];
    for(var i = 0; i < query.length; i++)
      {
        if (query[i].checked)
          checked.push(query[i].value);
      }
      if (!checked.length)
          return input;
      var output = [];
      for(var i = 0; i < input.length; i++)
      {
        if (checked.contains(input[i].bodyStyle))
        {
          output.push(input[i]);
        }
      }
//      console.log(output.length);
//      $rootScope.lastfilter = 'filterDealer';
    return output;
    }
});

myApp.filter('filterDealer', function() {
    return function(input, query) {
      if (!query)
          return input;
      var checked = [];
      for(var i = 0; i < query.length; i++)
      {
        if (query[i].checked)
          checked.push(query[i].value);
      }
      if (!checked.length)
          return input;
      var output = [];
      for(var i = 0; i < input.length; i++)
      {
        if (checked.contains(input[i].carBrand))
        {
          output.push(input[i]);
        }
      }
//      console.log(output.length);
//      $rootScope.lastfilter = 'filterDealer';
    return output;
    }
});


myApp.filter('realPrice', function() {
    return function(input, query) {
      var output = [];
      for(var i = 0; i < input.length; i++) {
//        console.log((input[i].p));
          if (parseInt(input[i].p) > 0) {
//            console.log((input[i].p));
            output.push(input[i]);
          }

      }
      return output;
    }
});




//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter

myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});



