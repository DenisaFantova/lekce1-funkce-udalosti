// tady je místo pro náš program


/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

function zobrazVysledek() {
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

/**
 * Upozorní uživatele při spuštění.
 */
let ctverecek = document.querySelector(".ctverecek"); 

function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  ctverecek.textContent = 'KUK!';
}

function zmenaBarvy() {
  ctverecek.style.backgroundColor = 'green';
}
