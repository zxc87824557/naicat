// 預設匯入時名字可以不一樣
// import apple from './export.js'
// let number = apple(1, 2)
// console.log(number)

// 具名個別匯入
// 匯入時變數名稱必須一樣
// import {} 放要引用的變數
// 如果怕變數名稱跟檔案內的重複，可以使用 as
// import { a as aa, b } from './export.js'
// console.log(aa)
// console.log(b)

// 具名一次匯入
// import * as 變數名
// import * as apple from './export.js'
// console.log(apple.a)
// console.log(apple.b)

// 預設和具名同時匯入
// import 預設, 具名 from 檔案
import apple, {a} from './export.js'
console.log(apple);
console.log(a);