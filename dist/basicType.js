"use strict";
// 関数の書き方
// function関数
function test(num) {
    return num;
}
//allow関数
const test2 = (num) => {
    return num ** 2;
};
//予期せぬ値を防ぐ
const expo = (amount) => {
    return amount ** 2;
};
expo(100);
//数値以外は渡せない
// expo('100') Error!
//bool型
let flag = false;
let trueAble = true;
//number型
// TypeScriptの全ての数値は浮動小数点値です。　
// TypeScriptは,16・10・2・8進数のリテラルもサポートしている
let decimal = 256;
let hex = 0xfff;
let binary = 0b0000;
let octal = 0o123;
//string型
//テキストデータ
//  バッククウォート,バブルクウォーテーション、シングルクウォーテーションで囲う
let color = "white";
color = 'black';
let myColor = `my color is ${color}`;
//array型
//配列型の記述には二つの方法がある
let list = [1, 2, 3]; //➀
let array = [1, 2, 3]; //➁
// tuple型
// tuple型を使用すると、固定数の要素の型が分かっている配列の表現ができる。
let x;
x = ["a", 1]; //OK
// x = [1, "a"] // Error!
//既知のインッデックスの要素にアクセスすると、正しい方が取得できる
console.log(x[0].substr(1));
// console.log(x[1].substr(1)); //Error!
//any型
// 型の不明な変数を扱うことができる
//　できる限りany型が現れないコードがいい
let whatever = 0;
whatever = "something";
whatever = true;
//unknown型
// 値の代入には寛容だが、値の利用に関しては厳しい
const certainlyNumbers = ['0']; //Error!
const maybeNumbers = ['0']; //OK
const probablyNumbers = ['0']; //OK
certainlyNumbers[0].toFixed(1); //OK
maybeNumbers[0].toFixed(1); //OK
probablyNumbers[0].toFixed(1); // Error!
//void型
//any型の反対のようなもで、型が全くないことを表す
//一般的に、値を返さない関数の戻り値として利用する
const logger = (message) => {
    console.log(message);
};
logger('error!');
//null型・undefined型
// TypeScriptにはnull型・undefined型という名前の方がある
//デフォルトでは, null及びundefined型は全ての型のサブタイプで全ての型に、nullとundefinedは代入できる
//ただし, --strictNullChecksフラグをtrueにするとnull,undefinedはそれぞれのそれぞれのタイプのみ割り当て可能になる
let u = undefined;
let n = null;
//never型
//発生し得ない値の型を表す。
const error = (message) => { throw new Error(message); };
//object型
//object型は、非プリミティブ型を表す型。つまり,bool,number,string,symbol,null,undefinedのどれでもない
//object型の記述方法も二つある
let objectBrace; //エラーを得ることができない
let objectType;
objectBrace = true; //ok
objectBrace = 0; //ok
objectType = false; //Error!
objectType = 1; //Error!
