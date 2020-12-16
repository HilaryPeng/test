
var isValid = function(s) {
    let stack = [];
    let left = ["(", "[", "{"];
    let right = [")", "]", "}"];
    if(right.indexOf(s[0]) > -1){
            return false;
    }
    for(let i in s){
        if(left.indexOf(s[i]) > -1){
            stack.push(s[i]);
        }
        if(right.indexOf(s[i])> -1){
            if( right.indexOf(s[i]) === left.indexOf(stack[stack.length -1]) ) {
                stack.splice(stack.length-1, 1);
            }else{
                return false;
            }
        }
            
    }
    if(stack.length == 0){
        return true;
    }
    return false;
};

console.log(isValid("()"));