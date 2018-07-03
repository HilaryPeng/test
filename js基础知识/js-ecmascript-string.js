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
    indexOf()
        返回某个字符在字符串中的位置
    lastIndexOf()
        从后向前搜索字符串
    match()
        里面添加的是正则表达式 从字符串中匹配出符合正则表达式的字符串
    replace()
        里面写入正则表达式 ，然后替换为其他的字符串
    fixed()
        以打字机文本显示字符串。
    fontcolor()
         以指定的颜色显示文本
    fontsize()
        以指定的尺寸来显示字符串
     search()
        检索与正则表达式匹配的值
      slice()
        提取字符串中的片段
      split()
        把字符串分割为字符串数组
       sub()
       吧字符串显示为下标
      substr() //stringObject.substr(start,length)
      substring()   stringObject.substring(start,stop) 不接受负值
      toLocalLowerCase() // 小写
      toLocalUpperCase() // 大写
      说一下es6的扩展
      1. 增加了遍历器接口 可以通过for...of遍历字符串
      for (let codePoint of 'foo') {
          console.log(codePoint)
        }
        // "f"
        // "o"
        // "o"
      2``的拼接 模板字符串
        这个在vue中用的蛮多的 但是更加高级的用法没有使用过 比如可以嵌套其他语言等或者是 用``来替代执行函数的括号 其中参数的接收问题等
      3.对于字符串编码的扩展 可以识别更多的字符
      超出某个范围的时候 是用两个字符表示的 但是es5的js无法解析出来
      4.includes(), startWith() ,endWith();
      includes() 返回布尔值 表示 是否有该字符
      startsWith() 表示该字符串是否在头部
      endsWith() 表示该字符串是否在尾部
      5.repeat()
        表示将改字符串重复几次 不支持负值Infinity;
      6.es2017又提供了字符串补全的功能
        padStart()补全头部
        padEnd() 补全尾部
      7.matchAll() 字符串扩展也是正则的扩展 返回匹配到所有的字符串
      8.
 */

