let nickName = document.getElementById("nick");

nickName.addEventListener("input", () => {
  if (nickName.value.length > 1) {
    document.getElementById("username").innerHTML = nickName.value;
  }
});

let valorRandomico = 1;
let dificuldade = document.getElementById("modo");
let iniciar = document.getElementById("start");

const adivinhar = () => {
  if (dificuldade.value == 1) {
    valorRandomico = Math.random() * 10;
    valorRandomico = valorRandomico.toFixed(0);
  } else if (dificuldade.value == 2) {
    valorRandomico = Math.random() * 100;
    valorRandomico = valorRandomico.toFixed(0);
  } else {
    valorRandomico = Math.random() * 200;
    valorRandomico = valorRandomico.toFixed(0);
  }
};

iniciar.addEventListener("click", adivinhar);

let contador = 3;
let oValorE = document.getElementById("oValorE");
let valor = document.getElementById("valor");
let play = document.getElementById("play");

function recarregarPagina() {
  window.location.reload();
}

const acertar = () => {
  if (valorRandomico == valor.value) {
    attemps.innerHTML = "Parabéns, você conseguiu adivinhar!";
    oValorE.innerHTML = "";
    setTimeout(recarregarPagina, 1000);
  } else if (valorRandomico < valor.value) {
    oValorE.innerHTML = "<b>O número é menor!</b>";
    contador--;
    attemps.innerHTML = `Você ainda tem ${contador} tentativas!`;
  } else {
    oValorE.innerHTML = "<b>O número é maior!</b>";
    contador--;
    attemps.innerHTML = `Você ainda tem ${contador} tentativas!`;
  }

  if (contador == 0) {
    attemps.innerHTML = "Suas tentivas se esgotaram!";
  }

  if (contador == -1) {
    window.location.reload();
  }
};

play.addEventListener("click", acertar);