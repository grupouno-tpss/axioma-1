var startButton = document.getElementById("buttonStart");
var n = 0;

startButton.addEventListener("click", function int () {
    document.getElementById("audio").play();
    location.href = window.location + "#h" + n;
    window.history.replaceState({}, "hola", "https://grupouno-tpss.github.io/axioma1/");
    startButton.innerHTML = "En progreso";
    if (n == 0) {
        alertInfo("<br>"+ "<br>" + "A continuación, vas a encontrar una serie de preguntas o planteamientos, los cuales, tienen el proposito de hacerte pensar o repasar sore las formas de comunicacion en diferentes contexto (especialmente del axioma 1)." + "<br>" + "<br>"+ "Las respuestas las hemos seleccionado a partir de la opinion de otras personas y logica propia." + "<br>"+ "<br>");
    }
    n++;
    startButton.removeEventListener("click", int);
});

document.getElementById("silens").addEventListener("click", function () {
    document.getElementById("audio").pause();
});
