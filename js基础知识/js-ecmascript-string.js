/*
总结下String的方法
先说字符串unicode Unicode 是为了解决传统的字符编码方案的局限而产生的，它
为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。
然后说说String的属性和方法
 属性 有长度length
 特殊字符 就是说字符串中 会出现一些特出的字符 这种情况下 无法正常输出 而加一个标识就可以正常的输出了 这种情况下用到的就是转义字符 \
 \n 换行
 \r 回车
 \\ 反斜杠
 \" 双引号
 \b 退格符
 \f 换页符
 方法：

    注意点？
    var a = new String('148gdh');
    var b = 'gfdg'
    console.log(typeof a,typeof b); //object 与 string
    charAt() ;//返回指定位置的字符？
        let a  =  new String('gfdgh');
        console.log(a.charAt(2)); //b 虽然是对象 但是正常来说 还是能够使用的
    charCodeAt() //返回指定位置的字符的Unicode编码
    concat()
        链接两个字符并返回新的字符
    fromCharCode()
            将Unicode编码转为字符
    indeOf()
        返回某个字符在字符串中的位置
    lastIndexOf()
        从后向前搜索字符串
    match()
        里面添加的是正则表达式 从字符串中匹配出符合正则表达式的字符串
    replace()
        里面写入正则表达式 ，然后替换为其他的字符串

 */

