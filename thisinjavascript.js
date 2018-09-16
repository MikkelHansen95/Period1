var test = {
    prop: 42,
    func: function () {
        return this.prop;
    },
};
console.log("This should write '42': " + test.func());


// global eller window
function f1() {
    return this;
}
// I browser:
//console.log(f1() === window);
// I Node:
//console.log(f1() === global);   


// Using bind on function
function f() {
    return this.a;
}
var g = f.bind({ a: 'abeland' });
console.log(g()); // abeland

var h = g.bind({ a: 'elefantland' });
console.log(h()); // abeland
//bind kan kun bruges en gang.


// Call og apply:
function add(c, d) {
    return this.a + this.b + c + d;
}
var o = { a: 1, b: 3 };
console.log(add.call(o, 8, 9));  // 21
console.log(add.apply(o, [8, 16])); // 28
