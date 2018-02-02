class Student{
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName){
        this.fullName=firstName+''+middleInitial+''+lastName;
    }
}
//class类
interface Person{
    firstName:string;
    lastName:string;
}


function greeter(person:Person){
    return 'hello' +person.firstName+""+person.lastName;

}
var user=new Student("huang",'zhi',"peng");
document.body.innerHTML=greeter(user);

//tsc -w greeter.ts 可以监听ts的变化 