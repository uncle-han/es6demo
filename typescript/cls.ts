// 定义一个class实例
class Persion {
    name = 'qqh'
    private age = 18
    say = function () {
        console.log(`我的名字是：${this.name}，我的年龄是：${this.age}`)
    }
}

const p = new Persion()
p.say()
// p.age // 属性“age”为私有属性，只能在类“Persion”中访问。
class Child extends Persion {
    // constructor() {
    //     super()
    // }
    getparentName() {
        console.log(this.name)
    }
}

const c = new Child()
c.getparentName()