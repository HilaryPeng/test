import angular from 'angular';
const buttonComponent = angular.module('buttonModule', []).component('buttonComponent',{
        bindings: {},
        replace: false,
        templateUrl: 'app/component/buttonComponent.html',
        controller: ($scope) =>{
            $scope.getMessage = () =>{
                console.log('get a message');
            }
        }
}).name;

export default buttonComponent;