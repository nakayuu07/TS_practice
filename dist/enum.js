"use strict";
// enumを使用すると、列列挙が定義できる。
// TypeScriptでは、数値列挙と文字列列挙の両方の列列挙を提供してる
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
let left = Direction.Left;
console.log(left); //2
//文字列列挙
// 文字列列挙型では各メンバーをString Literal Typesで初期化する
var Ports;
(function (Ports) {
    Ports["USER_SERVICE"] = "8080";
    Ports["REGISTER_SERVICE"] = "8081";
    Ports["MEDIA_SERVICE"] = "8888";
})(Ports || (Ports = {}));
console.log(Ports.USER_SERVICE); //8080
