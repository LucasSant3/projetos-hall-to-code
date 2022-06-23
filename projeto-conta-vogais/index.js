
const $text1 = 'eu vou para a escola'
const $text2 = 'o dia esta lindo hoje'

const array = [1, 2, 3, 4, 5, 18, 41, 55, 34, 71, 33, 44]

function contaVogais() { 
  let soma = 0;
  for (let posicao = 0; posicao < array.length; posicao = posicao + 1) {

    soma = soma + array[posicao]
  }
  console.log(soma)
  return soma
}

contaVogais()