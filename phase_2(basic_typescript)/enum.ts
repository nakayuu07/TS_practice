// enumを使用すると、列列挙が定義できる。
// TypeScriptでは、数値列挙と文字列列挙の両方の列列挙を提供してる

enum Direction {
  Up, // (enum number) Direction.Up = 0
  Down, // (enum number) Direction.Down = 1
  Left,  // (enum number) Direction.Left = 2
  Right,  // (enum number) Direction.Right = 3
}

let left = Direction.Left
console.log(left) //2

//文字列列挙
// 文字列列挙型では各メンバーをString Literal Typesで初期化する

enum Ports {
  USER_SERVICE = "8080",
  REGISTER_SERVICE = "8081",
  MEDIA_SERVICE = "8888"
}

console.log(Ports.USER_SERVICE) //8080
