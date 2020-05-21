function LoggerAndReturn(thing) {
    return thing;
}
var massageWithString = LoggerAndReturn('massageWithString Word!');
var massageWithOutString = LoggerAndReturn('massageWithOutString Word!');
var massage2 = LoggerAndReturn(2);
console.log(massageWithString);
console.log(massageWithOutString);
console.log(massage2);
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'Word']);
console.log(myNumArr);
console.log(myNumArr);
