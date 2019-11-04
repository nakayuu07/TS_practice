// 外部モジュールで定義された関数や変数は、型付与の有無を問わず型推論の対象となる
// このような振る舞いはimport構文を用いた場合にのみに限られ, require構文では型推論を行わない

import { value, label, returnFalse } from './importTest'
const v1 = value
const v2 = label
const v3 = returnFalse

// 推論結果
// const v1: 10
// const v2: 'label'
// const v3: () => boolean

// 『dynamic import』も同様に、型推論をサポートしている