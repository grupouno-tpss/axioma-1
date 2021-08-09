var puntos = 0;

function result (a, b) {
    var resultDiv = document.createElement("div");
    resultDiv.id = "alertResult";
    resultDiv.innerHTML = a;

    //resultDiv.setAttribute("style", "width: 70%; height: 33px; background: green; margin: 15%; position: fixed; top: -110px; margin: 15%; border-radius: 5px;");
    resultDiv.style.background = b;
    gsap.to(resultDiv, {duration: 2, "width":"70%", "height":"33px", "border":"solid #385B00 3px" ,"margin":"15%", "position":"fixed", "top":"-110px", "border-radius":"5px", "text-align":"Center", "font-size":"30px", "padding":"10px"});

    setTimeout(function () {
        gsap.to(resultDiv, {duration: 1, "height":"0px"});
    }, 3000);

    setTimeout(function () {
        document.body.removeChild(resultDiv);
    }, 3500);

    document.body.appendChild(resultDiv);
}

function next () {
    location.href = window.location + "#h" + n;
    window.history.replaceState({}, "hola", "https://grupouno-tpss.github.io/axioma-1/");
    n++;
    document.getElementById("correct").play();
}


var r1 = document.getElementById("r50");
var r2 = document.getElementById("r41");
var r3 = document.getElementById("r32");
var r4 = document.getElementById("r23");
var r5 = document.getElementById("r54");


r1.addEventListener("click", () => {
    result("Correcto", "green");
    puntos++;
    localStorage.setItem("puntos", puntos);
    next();
});
r2.addEventListener("click", () => {
    result("Correcto", "green");
    puntos++;
    localStorage.setItem("puntos", puntos);
    next();
});
r3.addEventListener("click", () => {
    result("Correcto", "green");
    puntos++;
    localStorage.setItem("puntos", puntos);
    next();
});
r4.addEventListener("click", () => {
    result("Correcto", "green");
    puntos++;
    localStorage.setItem("puntos", puntos);
    next();
});
r5.addEventListener("click", () => {
    result("Correcto", "green");
    puntos++;
    localStorage.setItem("puntos", puntos);
    alertInfo("Wow, acabas de finalizar la actividad y has respondido todo correctamente" + "<br>" + "<img src='https://images.vexels.com/media/users/3/223418/isolated/preview/9ae12ed0bb6c9ec8340dee6e6081f28c-emoji-de-icono-sorprendido.png' title='Tomado de: https://images.vexels.com/media/users/3/223418/isolated/preview/9ae12ed0bb6c9ec8340dee6e6081f28c-emoji-de-icono-sorprendido.png' width='200px'>");
});
