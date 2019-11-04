// objectの変数宣言時に初期値与えることで、型推論が適応される。
const obj = {
  foo: false,
  bar: 1,
  baz: '2',
}

//型推論
// const obj: {
     // foo: boolean,
     // bar: number,
     // baz: string,
// }

obj['foo'] = true //OK
obj['foo'] = 1 //error

// constで宣言された値はLiteral Typesになりますが
// Objectのプロパティは再代入が可能であるため、保持するプロパティリテラルはLiteral Typeとして推論されない
// アサーションを使うことでLiteral Types　として推論されるようになる

const obj1 = {
  foo: false as false,
  bar: 1 as 1,
  baz: '2' as '2',
}

obj1['foo'] = true //error
