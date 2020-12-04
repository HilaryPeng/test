import angular from 'angular';
const indexModule = angular.module('indexModule', []).directive('index', function(){
    return {
        restrict: 'E',
        scope:{},
        templateUrl:'app/directive/index/index.html',
        controller: function($scope,$state){
            $scope.goComponent = () => {
                console.log($state)
                $state.go('buttonComponent');
            }
        },
        controllerAs: 'index_controller',
    }
}).name;
export default indexModule;
