var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 定义一个class实例
var Persion = /** @class */ (function () {
    function Persion() {
        this.name = 'qqh';
        this.age = 18;
        this.say = function () {
            console.log("\u6211\u7684\u540D\u5B57\u662F\uFF1A" + this.name + "\uFF0C\u6211\u7684\u5E74\u9F84\u662F\uFF1A" + this.age);
        };
    }
    return Persion;
}());
var p = new Persion();
p.say();
// p.age // 属性“age”为私有属性，只能在类“Persion”中访问。
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor() {
    //     super()
    // }
    Child.prototype.getparentName = function () {
        console.log(this.name);
    };
    return Child;
}(Persion));
var c = new Child();
c.getparentName();
