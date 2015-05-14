/**
 * Created by Rehan on 5/14/2015.
 */

var app = angular.module("myApp", []);

app.controller('HelloCtrl', function($scope){
    $scope.name = "World";
})