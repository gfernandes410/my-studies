// ------------------------------------------------------------
// ---------- seção 2.5----------------------------------------
// function LoggerAndReturn<T>(thing: T) : T {
//     return thing
// }

// const massageWithString: string = LoggerAndReturn<string>('massageWithString Word!')
// const massageWithOutString: string = LoggerAndReturn('massageWithOutString Word!')
// const massage2: number = LoggerAndReturn(2)

// console.log(massageWithString)
// console.log(massageWithOutString)
// console.log(massage2)

// ------------------------------------------------------------
// ---------- seção 2.6----------------------------------------

// function getArray<T>(items: T[]): T[] {
//     return new Array<T>().concat(items)
// }

// let myNumArr = getArray([100,200,300])
// let myStrArr = getArray(['Hello','Word'])

// console.log(myNumArr)
// console.log(myStrArr)

// this line will get an type error 
// myNumArr.push('teste')

// ------------------------------------------------------------
// ---------- seção 2.7-----Multiple type-----------------------

// function getInfo<T,U>(id: T, name: U) : void {
//     console.log(typeof id + ',' + typeof name)
// }

// getInfo<string, string>('1','Jane')


// function displayType<T>(id: T, name: string): void {
//     console.log(typeof id + ',' + typeof name)
// }

// displayType<number>(2,'Malik')


// ------------------------------------------------------------
// ---------- seção 2.8-----Generic Constrain-----------------------

// class Customer {
//     firstName: string
//     lastName: string

//     constructor(fname:string, lname:string) {
//         this.firstName = fname
//         this.lastName = lname
//     }
// }

// function customerLogger<T extends Customer>(customer: T): void {
//     console.log(`${customer.firstName} ${customer.lastName}`)
// }

// let customer = new Customer('Jane','Doe')
// customerLogger(customer)


// ------------------------------------------------------------
// ---------- seção 2.9-----Interface-----------------------

// interface Pair<T,U> {
//     first: T
//     second: U
// }

// const test1: Pair<string,number> = { first:'Gabriel', second:123}
// const test2: Pair<string,string> = {first:'Gabriel', second:'Teste'}

// interface command<T,R> {
//     id: T
//     run(): R
// }

// const test3: command<string,number> = {
//     id: '123',
//     run: () => {
//         return 3
//     }
// }

// console.log('test1',test1)
// console.log('test2',test2)
// console.log('test3',test3.run())


// ------------------------------------------------------------
// ---------- seção 2.10----------------------------

// interface ElementChecker {
//     <T>(
//         items: T[],
//         toBeChecked: T,
//         atIndex: number
//         ) : boolean
// }

// function checkElementAt<T>(
//     items: T[],
//     toBeChecked: T,
//     atIndex: number
// ): boolean {
//     return items[atIndex] == toBeChecked
// }

// const checker: ElementChecker = checkElementAt
// const items = [1,3,5,6]

// ------------------------------------------------------------
// ---------- seção 2.11----------------------------

// class GenericNumber<T> {
//     zeroValue: T
//     add: (x: T, y: T) => T
// }

// let myGenericNumber = new GenericNumber<number>()
// myGenericNumber.zeroValue = 0
// myGenericNumber.add = (x,y) => {
//     return x + y
// }

// ------------------------------------------------------------
// ---------- seção 3.12----------------------------

// function log(target,key,descriptor) {
//     console.log(`${key} was call`)
// }

// class Calculator {
//     @log
//     square(n: number) {
//         return n * n;
//     }
// }

// ------------------------------------------------------------
// ---------- seção 3.15----------------------------


function property(target: any, key: string) {
    let value = target[key];
    // Replacement getter
    const getter = function() {
      console.log(`Getter for ${key} returned ${value}`);
      return value;
    };
    // Replacement setter
    const setter = function(newVal) {
      console.log(`Set ${key} to ${newVal}`);
      value = newVal;
    };
    // Replace the property
    const isDeleted = delete this[key];
    if (isDeleted) {
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  }
  class Person {
    @property
    public firstName: string;
  }
  const person = new Person();
  // set the firstName
  person.firstName = 'Haider';
  // call the getter
  console.log(person.firstName);