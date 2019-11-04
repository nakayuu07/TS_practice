"use strict";
// Type Scriptでは, typeofキーワードを使用し、宣言済み変数の型を取得できる。
//「型クエリー」と呼ばれ「型キャプチャ」を取得する
// JSのtypeof演算子とは別物
let asString = 'a';
let value;
value = "1";
value = 0; //Error!
let someKey;
//typeofキーワードとの併用
//keyof キーワードはtypeofキーワードと併用することも可能
//　変数myObjectはfoo,bar,bazのいずれしか受け入れない
const myObject = {
    foo: 'Foo',
    bar: 'Bar',
    baz: 'Baz'
};
let myObjectKey;
myObjectKey = 'foo'; //OK
myObjectKey = 'aaa'; //Error!
