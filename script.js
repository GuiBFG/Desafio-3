let nickName = document.getElementById('nick')

nickName.addEventListener('input', () => {
  console.log(nickName.value);

  if (nickName.value.length > 1) {
    document.getElementById('username').innerHTML = nickName.value
  }
})

let valorRandomico = 1
let dificuldade = document.getElementById('modo')
let iniciar = document.getElementById('start')

const adivinhar = () => {
  if (dificuldade.value == 1) {
    valorRandomico = Math.random() * 11
    valorRandomico = valorRandomico.toFixed(0)
  }

  else if (dificuldade.value == 2) {
    valorRandomico = Math.random() * 101
    valorRandomico = valorRandomico.toFixed(0)
  }

  else {
    valorRandomico = Math.random() * 201
    valorRandomico = valorRandomico.toFixed(0)
  }
  console.log(valorRandomico);
}

iniciar.addEventListener('click', adivinhar)

let contador = 3
let oValorE = document.getElementById('oValorE')
let valor = document.getElementById('valor')
let play = document.getElementById('play')

const acertar = () => {
  if (valorRandomico == valor.value) {
    attemps.innerHTML = 'Parabéns, você conseguiu adivinhar!'
    oValorE.innerHTML = ''
  }

  else if (valorRandomico < valor.value) {
    oValorE.innerHTML = '<b>O número é menor!</b>'
    contador--
    attemps.innerHTML = `Você ainda tem ${contador} tentativas!`
  }

  else {
    oValorE.innerHTML = '<b>O número é maior!</b>'
    contador--
    attemps.innerHTML = `Você ainda tem ${contador} tentativas!`
  }

  if (contador == 0) {
    attemps.innerHTML = 'Suas tentivas se esgotaram!'
  }

  if (contador == -1) {
    document.location.reload()
  }

  console.log(valorRandomico);
}

play.addEventListener('click', acertar)