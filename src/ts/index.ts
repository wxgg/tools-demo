class A {
    myName:number = 1;
    greeting: string;
    static a = 1;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
    public getName(): number{
        return this.myName;
    }
}

class B extends A{
    protected c = 1;
    get aa():number {
        return this.c;
    }
    constructor(message: string) {
        super(message);
        this.myName = 2;
        console.log()

    }
}
let greeter = new B('');

enum Pone {A = 1, B = 3, C}
console.log(Pone[2])
