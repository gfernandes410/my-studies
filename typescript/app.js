function LoggerAndReturn(thing) {
    return thing;
}
var massageWithString = LoggerAndReturn('massageWithString Word!');
var massageWithOutString = LoggerAndReturn('massageWithOutString Word!');
var massage2 = LoggerAndReturn(2);
console.log(massageWithString);
console.log(massageWithOutString);
console.log(massage2);
