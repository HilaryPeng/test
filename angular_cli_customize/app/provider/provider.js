import angular from 'angular';
const providerModule = angular.module('providerModule',[]).provider('providerFunction', function(){
    return {
        $get:function(){
            return {
                title:"我是一个provider"
            }
        }
    }
    
}).name;
export default providerModule;