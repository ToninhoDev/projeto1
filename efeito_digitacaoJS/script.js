const titulo = document.querySelector("h1");
typewriter(titulo);

function typewriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  textoArray.forEach((letra, i) => {
    setTimeout(() => (elemento.innerHTML += letra), 120 * i);
  });
}
