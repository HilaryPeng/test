/*
    布尔值其实没啥好说的
    记录一下new Boolean出来的值吧 和平常做的判断一样
    new Boolean(undefined) => false
    new Boolean(null) =>false
    new Boolean("") =>false
    new Boolean(NaN) =>false
    new Boolean(false) =>false
    new Boolean(0 || -0) =>false
    也就是说我可以用来做个判断吧 然后布尔值可以转为字符串有一个方法
    toString() 可以变为字符串
    其他没啥了



 */