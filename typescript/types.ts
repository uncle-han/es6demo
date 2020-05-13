// 用type来声明  一个类型
type NSB = string | number | boolean
var nsb:NSB = 1
nsb = '1'
nsb = true

// type来定义接口

interface inf1 {
    name:string
}

interface inf2 {
    age:number
}


type PortionType = inf1 | inf2

var postion:PortionType = { // postion可以包含inf1 或 inf2 接口的限定
    name: '1',
    age: 1
}

// 约束一个变量，只能是某个值

type str = 'qqh' | 'cql'

// var name1:str = '1' // 不能将类型“"1"”分配给类型“str”
var name1:str = 'qqh'

function getName(name:str):string {
    return name
}

// getName(123) // 类型“123”的参数不能赋给类型“str”的参数
getName('qqh')