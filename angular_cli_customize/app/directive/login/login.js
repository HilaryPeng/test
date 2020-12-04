import angular from 'angular';
import providerValue from '_provider/providerValue';
import factoryModule from "_provider/providerFactory";
import serviceModuleName from '_provider/providerServer';
import constantModule from '_provider/providerConstant';
import providerModule from "_provider/provider"
import loginHtml  from '_directive/login/login.html'
    const lorginModule = angular.module('login',[providerValue, factoryModule,serviceModuleName,constantModule,providerModule]);
    const login = lorginModule.config(function($provide){
        //decorator的用法
        $provide.decorator('providerFunction',function($delegate){
            $delegate.name = 'apeng';
            return $delegate;
        })
    }).directive('login', function(){
        return {
                restrict: "E",
                scope: {
                    
                },
                //controller can direct inject server;
                controller:function($scope,$state,tokenId, apiToken,serverFunction,constantValue,providerFunction){
                    // console.log(new serviceFunction('23'))
                    console.log(providerFunction);
                    //the tokenId value can be direct useed; because it has been inject;
                    $scope.serverModule = serverFunction.add()
                    $scope.itemId = tokenId;
                    $scope.clientId = apiToken;
                    $scope.username = "zhipeng";
                    $scope.password = 'Peng0806';
                    $scope.constant = constantValue;
                    $scope.title = providerFunction.title + providerFunction.name;
                    $scope.logintoIndex = function(){
                        // console.log($state)
                        if($scope.username === 'apeng' && $scope.password === "Peng0806") {
                            $state.go('index');
                        }
                    }
                },
                controllerAs: "VM",
                replace: true,
                // templateUrl : we need use absolute path
                // template: require('./login.html')
                template:loginHtml
            }
    }).name
export default login;
