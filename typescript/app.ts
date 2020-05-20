function LoggerAndReturn<T>(thing: T) : T {
    return thing
}

const massageWithString: string = LoggerAndReturn<string>('massageWithString Word!')
const massageWithOutString: string = LoggerAndReturn('massageWithOutString Word!')
const massage2: number = LoggerAndReturn(2)


console.log(massageWithString)
console.log(massageWithOutString)
console.log(massage2)