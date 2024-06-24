// scripts
const calcular = document.getElementById("calcular");
const qtdHomens = document.getElementById("man");
const qtdMulheres = document.getElementById("woman");
const qtdCriancas = document.getElementById("kids");
const carneBovina = document.getElementById("carne-bovina");
const frango = document.getElementById("frango");
const linguiça = document.getElementById("linguica");
const refrigerante = document.getElementById("refrigerante");
const cerveja = document.getElementById("cerveja");
const resultado = document.getElementById("resultado");
resultado.style.display = "none";

calcular.addEventListener("click", (event) => {
  event.preventDefault();
  const homensValue = parseInt(qtdHomens.value);
  const mulheresValue = parseInt(qtdMulheres.value);
  const criancasValue = parseInt(qtdCriancas.value);

  const carneBovinaTotal =
    homensValue * 0.5 + mulheresValue * 0.3 + criancasValue * 0.2;
  const frangoTotal =
    homensValue * 0.2 + mulheresValue * 0.2 + criancasValue * 0.1;
  const linguiçaTotal =
    homensValue * 0.2 + mulheresValue * 0.2 + criancasValue * 0.2;
  const refrigeranteTotal =
    homensValue * 0.3 + mulheresValue * 0.4 + criancasValue * 0.2;
  const cervejaTotal = homensValue * 0.8 + mulheresValue * 0.5;

  carneBovina.textContent = `Carne Bovina: ${carneBovinaTotal}kg`;
  frango.textContent = `Frango: ${frangoTotal}kg`;
  linguiça.textContent = `Linguiça: ${linguiçaTotal}kg`;
  refrigerante.textContent = `Refrigerante: ${refrigeranteTotal}l`;
  cerveja.textContent = `Cerveja: ${cervejaTotal}l`;

  resultado.style.display = "block";
});
