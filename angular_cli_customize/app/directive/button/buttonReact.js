import angular from 'angular';
import 'ngReact';
import Button from './../../react/Button.jsx'
var textButton = angular.module('textButton', ['react']).value('Button', Button).directive('textButton', function(reactDirective){
    return reactDirective(Button)
}).name;

export default textButton;