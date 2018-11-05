console.log(`
  '01) '1' == 1:   ${'1'==1},   -> está sendo comparado o valor apenas, ou seja se 1 é igual a 1
  '02) '1' === 1:  ${'1'===1},  -> está sendo comparado o tipo da variável
  '03) '3' != 3:   ${'3' != 3}
  '04) '3' !== 3:  ${'3' !== 3}
  '05) 3 < 2:      ${3 < 2}
  '06) 3 > 2:      ${3 > 2}
  '07) 3 <= 2:     ${3 <= 2}
  '08) 3 >= 2:     ${3 >= 2}

`)

const d1 = new Date(0)
const d2 = new Date(0)

console.log(`
  d1 = ${d1}
  d2 = ${d2}
  ----------------------------------
  '09) d1 == d2:     ${d1 == d2}  -> falso, pois o que está sendo comparado referência de endereço de memória
  '10) d1 === d2:    ${d1 === d2} -> falso, pois o que está sendo comparado referência de endereço de memória
  d1.getTime() = ${d1.getTime()}
  d2.getTime() = ${d2.getTime()}
  ----------------------------------
  '11) d1.getTime() === d2.getTime(): ${d1.getTime() === d2.getTime()} -> verdadeiro pois esta comparando números
  '12) d1.getTime() == d2.getTime():  ${d1.getTime() == d2.getTime()}  -> verdadeiro pois esta comparando números
  '13) undefined == null:  ${undefined == null}
  '14) undefined === null: ${undefined === null}

`)