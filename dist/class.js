"use strict";
class Creature {
    constructor(numberOfHands, numberOfFoot) {
        this.numberOfHands = numberOfHands;
        this.numberOfFoot = numberOfFoot;
    }
}
const creature = new Creature(0, 4);
class Cat extends Creature {
    constructor(bark) {
        super(0, 4);
        this.breaking = () => {
            return `${this.bark}`;
        };
        this.shakeTail = () => {
            console.log(this.breaking());
        };
        this.bark = bark;
    }
}
const dog = new Cat("nya-nya");
class Human extends Creature {
    constructor(name) {
        super(2, 2);
        this.greet = () => {
            return `hello! I'm ${this.name}`;
        };
        this.shakeHands = () => {
            console.log(this.greet());
        };
        this.name = name;
    }
}
// public private protectedの修飾子を付与できる
// privateは同一クラスのみ、protectedはサブクラスのみ, publicはどこらからでもok
class Taro extends Human {
    constructor() {
        super('taro');
        this.greeting = () => {
            console.log(this.greet()); //継承関係があるので protected関数実行可能
        };
    }
}
const taro = new Taro();
taro.greeting(); //publicなので可能
taro.greet(); //protectedなので不可
taro.shakeHands(); //親のpublicなので可能
