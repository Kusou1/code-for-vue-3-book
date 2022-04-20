import {foo} from './utils'

// PURE的作用是告诉rollup.js这段代码调用不会产生副作用，再次构建就会发现打包产物中也不带有foo函数了
// 该注释不止rollup能够识别到，webpack和terser也可以
/*#__PURE__#*/ foo()