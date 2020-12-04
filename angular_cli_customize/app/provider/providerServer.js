import angular from 'angular'
import factoryModule from './providerFactory';
class serviceModuleNameClass {
  constructor(){
    this.name = "黄致鹏";
    // this.age = age;
  }
  add(){
      return this.name;
  }
}
const serviceModuleName = angular.module('serverModule', [factoryModule]).service('serverFunction', serviceModuleNameClass).name;
export default serviceModuleName;