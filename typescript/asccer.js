// 当存在联合类型是需要某个类型的属性的时候。而另外一个属性是没有的
function asccer(name) {
    // (name as string).length
    name.length;
}
asccer('123');
asccer(123);
