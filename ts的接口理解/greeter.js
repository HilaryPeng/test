var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + '' + middleInitial + '' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'hello' + person.firstName + "" + person.lastName;
}
var user = new Student("huang", 'zhi', "peng");
document.body.innerHTML = greeter(user);
//tsc -w greeter.ts 可以监听ts的变化  
