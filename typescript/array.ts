// [] + 类型
const arr: [number] = [123]
const arr21: [String] = ['123']
const arr11: number[] = [123]
const arr22: String[] = ['123']
const arr5: any[] = [1,true,'123']

// 泛型
const arr1:Array<number> = [123]
const arr3: Array<String> = ['123']
const arr4: Array<any> = [1,true,'123']

interface Type  {
    [index:number] : number
}

const arr7:Type = [123, 3]

// 接口的方法定义对象
interface Arrtype {
    name: String
    age: Number
    readonly sex: String
    skiil?: String
}

const arr6: Arrtype[] = [{
    name : '123',
    age: 123,
    sex: 'nan'
}]

// arr6[0].sex = '3'
interface UserInfor {
    username: String
    tell: Number
    address?:String
}

// 接口定义数组，数组的下标是数字，数组的值是一个对象，
interface Arrtype1 {
    [index:number] : UserInfor
}

const infor: Arrtype1 = [
    {
        username: 'qqh',
        tell: 123
    }
]

// 泛型定义数组里面的值
const infor1:Array<UserInfor> = [
    {
        username: 'qqh',
        tell: 123
    }
]

// 类型 + []

const infor2:UserInfor[] = [
    {
        username: 'qqh',
        tell: 123
    }
]