
// 导出的是表达式的值.一个模块只能有一个export default
// export default 表达式

// 导出的是true
// export default 1<2
// 导出的是200
// export default 0?100:200

let x = 10;
let y = 20;
let n = 30;
let m = 40;
let i = 50;
let j = 60;

// 通过导出数组来导出多个数据.不推荐
// export default [x,y]

// export不是导出表达式,是一个特殊写法.
// 导出什么变量,导入时也需要使用相同的变量名.
// export {x,y}

// 导出的别名
// export {x as a,y as b}

// 可以分两次导出.
// export {x,y,n,m}
// export {i,j}

// import和export 是es6的语法
// 没有es6之前,是怎么实现模块化的导入导出的?
// 利用插件实现模块化的导入导出.
// common.js,require.js.比较常见的模块化插件.
// 模块化插件规范:AMD,CMD
// AMD -> 什么时候用什么时候导.(require.js)
// CMD -> 全部导入了,才能开始用.(common.js)

// import和export有自己id规范.

// 这是插件语法的导出,导出的是一个表达式的值.
module.exports = {
    x,y,n,m,j,i
}
