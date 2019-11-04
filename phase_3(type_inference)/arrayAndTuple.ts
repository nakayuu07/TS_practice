// TypeScriptではArray / Tupleを宣言するには、ブラケット([])を利用する

//アノテーションなしで配列を宣言
const a1 = [true, false]
const a2 = [0, 1, "2"]
const a3 = [true, 1, "2"]
//型推論
// a1: boolean[]
// a2: (string | number)[]
// a3: (string | number | boolean )[]

//配列に含むことのできる型を固定したい場合は代入時にアサーションを付与する。
const a4 = [0 as 0, 1 as 1] // const a4: (0 | 1)[]
// a4.push(1) //OK
// a4.push(2) //Error!

//アノテーションによって詳細な型を付与した値を代入することでも同様の結果を得れる
const zero: 0 = 0
const one = 1 as 1
const a5 = [zero, one]
a5.push(1)
// a5.push(2) //Error!

// Tuple,の型推論
const t1 = [false] as [boolean]
const t2 = [false, 1] as [boolean, number]
const t3 = [false, 1, "2"] as [boolean, number, string]
// const t4 = [false, 1, "2", "3"] as [boolean, number, string, "3"]
let v3_0 = t3[0] // boolean
v3_0 = true //OK
let v3_1 = t3[1] // number
v3_1 = 2 //OK
let v3_2 = t3[2] // string
v3_2 = "1" //OK
let v3_3 = t3[3] //Error index外の参照はNG

//Index外の追加はerrorにならない。代入できる型は宣言時に指定したUnion Typesのみ
t1.push(true) //ok
t1.push(1) //error

