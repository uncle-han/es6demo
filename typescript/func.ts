// 1、 对函数参数的约束
// 声明式函数类型
function f1(name: string, age:number):number {// 有返回类型，类型为数字类型
    return age
}

// const res1:string = f1('qqh', 18)  // 不能将类型“number”分配给类型“string”。
const res1:number = f1('qqh', 18)


function f2(name:string, age: number):void { // 无返回类型的
    console.log(`我是名字是：${name}年龄是：${age}岁`)
}

// const res2:string = f2('qqh', 18) // 不能将类型“void”分配给类型“string”。

// 2、默认参数的约束
// 省略参数的写法
function f3(name:string, age:number,sex?:string):number {
    return age   
}

const res3:number = f1('qqh', 18)
// 返回值为数组类型的约束
function f4(...agus:Array<string>):Array<string> {
    console.log(agus)
    return agus
}
const res4:string[] = f4('qqh', '18')

// 3、表达式变量的约束
// 对于匿名函数，表示的约束
const f5:(name:string,age:number)=>Array<string | number> = function(name:string, age:number):(string | number)[] {
    return [name, age]
}

// 接口定义函数的参数类型和返回值类型

interface Ftype {
    (name:string, age:number):Array<string | number>
}

const f6:Ftype = function(name, age):(string | number)[] {
    return [name,age]
}

const res5:Array<string | number> = f6('qqh', 1)


// 函数重载

function getValue(v1:string):void
function getValue(v1:number):void
function getValue(v1:number | string):void {
    console.log(v1)
}
getValue(123)
getValue('123')
