// 関数宣言する際に、戻り型アノテーションを付与する必要はない。
// TypeScriptでは関数の定義内容に応じて型推論を行う

const getPriceLabel = (amount: number, tax: number) => {
  return `¥${amount * tax }`
}

//推論結果
// const getPriceLabel = (amount: number, tax: number): string

let a = getPriceLabel(1, 1.1)
a = 2 //Error!

const log = (message: string) => {
  console.log(message)
}
// const log = (message: string): void

//『定義内容の型推論を優先するのか』・『定義内容を宣言するのか』は状況に応じて個人の判断する
// string型の値を返す関数なら戻り型アノテーションで未然にバグが防げる
const getStringValue = (value: number, prefix?: string) :string => {
  if(prefix === undefined) return value //error
  return `${prefix} ${value}`
}

//関数内に条件分岐がある場合などの、戻り値が曖昧なものも、定義内容に応じてUnion Typesで型推論が適応される。
const getScore = (score: number) => {
  if(score < 0 || score >　100) return null
  return score
}
// const getScore(score:number): number | null
const getScoreAmount = (score: 'A' | 'B' | 'C') => {
  switch(score){
    case 'A':
      return 100
    case 'B' :
      return 60
    case 'C' :
      return 30
  }
}
// const getScoreAmount = (score: 'A' | 'B' | 'C'): 100 | 60 | 30