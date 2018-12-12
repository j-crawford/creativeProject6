angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);
  
var validateCssColour = function(colour){
    var rgb = $('<div style="color:#28e32a">');     // Use a non standard dummy colour to ease checking for edge cases
    var valid_rgb = "rgb(40, 227, 42)";
    rgb.css("color", colour);
    if(rgb.css('color') == valid_rgb && colour != ':#28e32a' && colour.replace(/ /g,"") != valid_rgb.replace(/ /g,""))
        return false;
    else
        return true;
};

var setColor = function(color){
  if(validateCssColour(color)){
    $('body').css("background-color",color);
  }else if(color==="rainbows"){
    $('body').css("background-image","url('https://i.dailymail.co.uk/1/2018/10/03/16/4737842-6235685-image-m-13_1538582304598.jpg')")
  }else{
    $('body').css("background-image","url('https://i.pinimg.com/474x/c9/da/0f/c9da0fbbf4910a4e76c5896d6a9596f3--algebra-humor-math-jokes.jpg')");
    $('body').css("background-size", "100vh 100vh");
  }
};