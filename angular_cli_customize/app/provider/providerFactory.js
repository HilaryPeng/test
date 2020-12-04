import angular from 'angular'
import providerValue from './providerValue'
const factoryModule = angular.module('factoryModule', [providerValue]).factory('apiToken', ["tokenId",function clientIdFactory(tokenId){
    // it can get other provider to contruct provider;
    // the most situation is to create a object;
    console.log("内部" + tokenId);
   // it's an function  means that can do many thing. 
    // return number + 10;
    return ("factory" + tokenId)
}]).name;
export default factoryModule