var num;
(function (num) {
    num[num["one"] = 0] = "one";
    num[num["tow"] = 1] = "tow";
    num[num["three"] = 2] = "three";
    num[num["frou"] = 3] = "frou";
})(num || (num = {}));
console.log(num.one);
console.log(num[0]);
console.log(num);
