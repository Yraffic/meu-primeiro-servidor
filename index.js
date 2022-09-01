// require() ele faz a importção

const lodash = require('lodash')
//outra forMA 
const { uniq } = require('lodash')
// ex da aula
/* const array = [1, 2, 3, 4, 4, 5, 6, 7, 1] */
/* 
const arrayUnicoDois = lodash.uniq(array)
const arrayUnico = uniq(array) */
/* console.log(arrayUnico) */

// importando arquivo

const arrayImportado = require('./array')
console.log(arrayImportado)
const arrayDoImportado = uniq(arrayImportado)

/* console.log(arrayDoImportado) */
console.log(arrayImportado)

