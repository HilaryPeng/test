import uiRouter from '@uirouter/angularjs';
import loginDirective from '_directive/login/login'
import angular from 'angular';
import buttonComponent from '_component/buttonComponent'
import textButton from '_directive/button/buttonReact'
// import reactDirectiveName from '_directive/reactDirective/useReactComponent';
import indexModule from '_directive/index/index'
const anuglarRouter = angular.module('routerModule',[uiRouter, loginDirective,indexModule ,buttonComponent, textButton])
    .config(function($urlRouterProvider,$stateProvider){
        $urlRouterProvider.when('', '/login');
        $stateProvider.state('login',{
            url:'/login',
            templateUrl: "app/page/login.html",
        })
        .state('index', {
            url:'/index',
            templateUrl:"app/page/index.html"
        })
        .state('buttonComponent', {
            url:'/component',
            templateUrl: "app/page/buttonComponent.html"
        })
        
}).name
export default anuglarRouter;