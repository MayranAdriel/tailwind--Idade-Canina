let elemento = document.querySelector("span");

function calculaIdade() {
  let anos = parseInt(document.querySelector("#anos").value) || 0;
  let meses = parseInt(document.querySelector("#meses").value) || 0;

  let calculoAnos = anos * 7;

  let calculoMeses = (meses * 7) / 12;

  let idadeHumanaTotal = calculoAnos + calculoMeses;

  elemento.textContent = `Seu amigo tem ${idadeHumanaTotal.toFixed(0)} anos`;
}
