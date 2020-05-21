// ------------------------------------------------------------
// ---------- seção 2.5----------------------------------------
function LoggerAndReturn<T>(thing: T) : T {
    return thing
}

const massageWithString: string = LoggerAndReturn<string>('massageWithString Word!')
const massageWithOutString: string = LoggerAndReturn('massageWithOutString Word!')
const massage2: number = LoggerAndReturn(2)

// console.log(massageWithString)
// console.log(massageWithOutString)
// console.log(massage2)

// ------------------------------------------------------------
// ---------- seção 2.6----------------------------------------

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let myNumArr = getArray<number>([100,200,300])
let myStrArr = getArray<string>(['Hello','Word'])

console.log(myNumArr)
console.log(myNumArr)