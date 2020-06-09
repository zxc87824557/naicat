// import exp from './export.js'
// console.log(exp)

// 匯入時名字可以不一樣
// import add from './export.js'
// let number = add(1, 2)
// console.log(number)

// 具名個別匯入
// 匯入時變數名稱必須一樣
// import {} 放要引用的變數
// 如果怕變數名稱跟檔案內的重複，可以使用as
// import {a as aa, c} from './export.js'
// console.log(aa)
// console.log(c)

// 具名一次匯入
// import * as 變數名
// import * as apple from './export.js'
// console.log(apple.c);
// console.log(apple.b);

// 預設和具名同時
// import 預設，具名 from 檔案
import apple, {a} from './export.js'
console.log(apple);
console.log(a);