function alertInfo (a) {
    var aDiv = document.createElement("div");
    var aP = document.createElement("p");
    var aButtonClose = document.createElement("button");

    aP.innerHTML = a;
    aButtonClose.innerHTML = "Cerrar";

    aButtonClose.setAttribute("style", "padding: 5px 15px 5px 15px; color: black; border: solid black 1px; background: transparent; border-radius: 5px;");
    aP.style.fontSize = "20px";
    aP.style.color = "black";
    aP.style.fontFamily = "Calibri";
    aDiv.setAttribute("style", "width: 70%; height: 300px; background: gray; position: relative; top: 100px; margin-left: 15%; text-align: center; padding: 25px; box-shadow: -1px 3px 5px 1000px rgba(0,0,0,0.75); position:fixed;");
    document.body.appendChild(aDiv);
    aDiv.appendChild(aP);
    aDiv.appendChild(aButtonClose);


    //close 

    aButtonClose.addEventListener("click", function () {
        document.body.removeChild(aDiv);
    });
}

setTimeout(function () {
    alertInfo("Hola, somos el grupo 1" + "<br>" + "<br>" + "Esta pagina es un proyecto que hemos organizado para nuestra presentación del axioma 1, es imposible no comunicar" + "<br>" + "<br>" + "La pagina puede no estar completa, y puede tener algunos fallos, pero, esperamos que nos entiendas (no hemos tenido mucho tiempo)." + "<br>" + "<br>" + "Disfruta de nuestro juego didactico :)" + "<br>" + "<br>");
}, 500);