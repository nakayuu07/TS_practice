class Creature {
  numberOfHands: number
  numberOfFoot: number
  constructor(numberOfHands: number, numberOfFoot: number){
    this.numberOfHands = numberOfHands
    this.numberOfFoot = numberOfFoot
  }
}

const creature = new Creature(0, 4)

class Cat extends Creature {
  bark: string
  constructor(bark: string){
    super(0, 4)
    this.bark = bark
  }

  breaking = ():string => {
    return `${this.bark}`
  }

  shakeTail = () => {
    console.log(this.breaking())
  }
}

const dog = new Cat("nya-nya")

class Human extends Creature {
  name: string
  constructor(name: string){
    super(2,2)
    this.name = name
  }

  protected greet = () => {
    return `hello! I'm ${this.name}`
  }

  public shakeHands = () => {
    console.log(this.greet())
  }
}

// public private protectedの修飾子を付与できる
// privateは同一クラスのみ、protectedはサブクラスのみ, publicはどこらからでもok
class Taro extends Human {
  constructor(){
    super('taro')
  }
  public greeting = () => {
    console.log(this.greet()) //継承関係があるので protected関数実行可能
  }
}

const taro = new Taro()
taro.greeting() //publicなので可能
taro.greet() //protectedなので不可
taro.shakeHands() //親のpublicなので可能