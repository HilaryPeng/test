import angular from 'angular';
//create a service and inject it .

const providerValue = angular.module('providerValue', []).value('tokenId', "I'm token id").name;

// console.log(providerValue)
export default providerValue;