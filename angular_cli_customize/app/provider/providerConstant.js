import angular from 'angular';
const constantModule = angular.module('angular',[]).constant("constantValue", "我是一个不可被改变的值").name;
export default constantModule;