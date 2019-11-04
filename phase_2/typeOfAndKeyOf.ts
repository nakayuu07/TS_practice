// Type Scriptでは, typeofキーワードを使用し、宣言済み変数の型を取得できる。
//「型クエリー」と呼ばれ「型キャプチャ」を取得する
// JSのtypeof演算子とは別物

let asString: string = 'a'
let value: typeof asString
value = "1"
value = 0 //Error!

//keyofキーワードを利用すると、オブジェクトのプロパティ名称をString Literal Union Typesで取得できる。
type someType = {
  foo: string
  bar: string
  baz: string
}

let someKey: keyof someType
//typeofキーワードとの併用
//keyof キーワードはtypeofキーワードと併用することも可能
//　変数myObjectはfoo,bar,bazのいずれしか受け入れない
const myObject = {
  foo: 'Foo',
  bar: 'Bar',
  baz: 'Baz'
}

let myObjectKey: keyof typeof myObject
myObjectKey = 'foo' //OK
myObjectKey = 'aaa' //Error!