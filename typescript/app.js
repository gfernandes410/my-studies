// ------------------------------------------------------------
// ---------- seção 2.5----------------------------------------
// function LoggerAndReturn<T>(thing: T) : T {
//     return thing
// }
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 6];
