// 字符串类型
var poesionname = 'qqh';
poesionname = '123';
// 数字类型
var num = 1;
// 联合类型
var numAndStr = 123;
numAndStr = '123';
// 布尔类型
var bool = true;
// nudefind 类型
var nud = undefined;
// null 类型
var nu = null;
// 任意类型
var antd = '123';
antd = 123;
antd = [1];
antd = { name: '11' };
// 隐式声明
var a = '123'; // 声明并赋值，值是字符串类型的，  a默认为string类型的
// a = 1 == >报错
// 声明不赋值   为any类型
var b;
b = 123;
b = '456';
b = undefined;
b = null;
b = true;
b = [];
