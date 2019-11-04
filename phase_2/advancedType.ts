// Intersection Types
// Intersection Typesは、複数の型を一つに結合する
// アンパサンド(&)を使う

type Dog = {
  tail: Tail,
  bark: () => void
}
type Bird = {
  wing: Wing,
  fly: () => void
}
type Kimera = Dog & Bird

//推論結果
// type Kimera = {
//   tail: Tail,
//   bark: () => void,
//   wing: Wing,
//   fly: () => void,
// }

// Union Types
//共用体は、複数の方のうち一つの方が成立することを示している。
let value: boolean | number | string
value = true
value = 1
value = "a"
//array型に含む要素をunion typeにすることも可能
let numberOtString: (number | string )[]
// let numberOtString: Array<number | string> こっちでも可
numberOtString = [1, 2, "a"]
numberOtString = [1, 2, "a", true] //Error

//Literal Types
//String Literal Types
//文字列リテラルを使用すると、文字列に必要な正確な値を指定できる
//String Literal Typesはstring型のサブタイプなので、文字列が持つ関数にアクセスできる
let myName: "Taro"
myName = "Taro" //OK
myName = "Jiro" //Error
myName.toLocaleLowerCase() //OK
//String Literal TypesをUnion Typesと併用することで、定数のように扱える.
let users: "Taro" | "Jiro" | "Hanako"

//Numeric Literal Types
//数値リテラルを使用すると、数値として正確な値を指定できる
//Numeric Literal Typesはnumber型のサブタイプなので、数値の持つ関数にアクセスできる
let zero: 0
zero = 0 //OK
zero = 1 //Error!
zero.toFixed(1) //OK
//Numeric Literal TypesもUnion Typesと併用することで、定数のように扱える.
let bit: 8 | 16 | 24 | 32
bit = 8
bit = 12 //Error!

//Boolean Literal Types
//審議値リテラル
let truth: true
truth = true
truth = false //Error!