import './app/css/style.css';
import angular from 'angular'
import anuglarRouter from './app/route/router';
const ngModule = angular.module('app',[anuglarRouter])
ngModule.controller('myController', function($scope){
   //donsomething;
   $scope.name = 12343;
})

