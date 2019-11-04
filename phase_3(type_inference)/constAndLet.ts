//letの型推論
// 変数に型を適用するために、型を必ずつける必要はない。
// TypeScriptは、宣言時に代入された値からその値の型を推論できる。

let user = 'Taro'
let value = 0
let flag = false
//推測された型推論
// let user: string
// let value: number
// let flag: boolean

//constの型推論
// constで宣言された値は再代入できない。
// 値が固定値のため,プリミティブ型を代入すると、適用される型推論はLiteral Typesになる。
const user2 = 'Taro'
const value2 = 0
const flag2 = false
//推測された型推論
// const user: 'Taro'
// const value: 0
// const flag: false

// Widening Literal Types
// constによって適応されるLiteral Typesは、通常のLiteral Typesとは少し異なるWidening Literal Typesである
// プログラマーの明示的な型付与ではないLiteral Typesとも呼ぶ
// その変数を変更可能な変数に代入すると、Literal Typesではなくなる
const wideningZero = 0
const nonWideningZero: 0 = 0
const asNonWideningZero = 0 as 0

let zeroA = 0; //let zeroA: number
zeroA = 1 //OK
let zeroB = wideningZero; //let zeroB: number
zeroB = 1 //OK
let zeroC = nonWideningZero; //let zeroC: 0
zeroC = 1 //Error!
let zeroD = asNonWideningZero; //let zeroD: 0
zeroD = 1 //Error!

//String Literal TypesやBoolean Literal Typesでも同様
const wideningValue = 'value'
const nonWideningValue: 'value' = 'value'
const asNonWideningValue = 'value' as 'value'

let valueA =  'value' // let valueA: string
let valueB = wideningValue  // let valueB: string
let valueC = nonWideningValue  // let valueC: 'value'
let valueD = asNonWideningValue  // let valueD: 'value'


