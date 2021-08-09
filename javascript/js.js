var cont = 0;

/*p = titulo
a div principal
b,c,d,e = opciones*/ 

function generarDiv (p, a, b, c, d, e, opc1, opc2, opc3, opc4, imgSrc ) {
    var divP = document.createElement("div");
    var divS = document.createElement("div");
    var div1 = document.createElement("div");
    var div2= document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var img = document.createElement("img");
    img.src = imgSrc;
    img.title = "Tomado de: http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg";

    var h1 = document.createElement("h1");
    h1.id = "h" + cont;
    h1.innerHTML = p;
    div1.innerHTML = opc1;
    div2.innerHTML = opc2;
    div3.innerHTML = opc3;
    div4.innerHTML = opc4;

    //id
    divS.id = "r" + "1" + cont;
    div1.id = "r" + "2" + cont;
    div2.id = "r" + "3" + cont;
    div3.id = "r" + "4" + cont;
    div4.id = "r" + "5" + cont;
    cont++


    //style
    divP.setAttribute("style", a);
    divP.appendChild(h1);
    divP.appendChild(img);
    divP.appendChild(divS);
    divS.appendChild(div1);
    divS.appendChild(div2);
    divS.appendChild(div3);
    divS.appendChild(div4);
    div1.setAttribute("style", b);
    div2.setAttribute("style", c);
    div3.setAttribute("style", d);
    div4.setAttribute("style", e);

    divS.setAttribute("style", "display: flex; justify-content: center; align-items: center; text-align: center;");

    divP.style.backgroundRepeat="no-repeat";
    divP.style.backgroundSize="100%";

    document.body.appendChild(divP);

    h1.style.textAlign="center";

    h1.style.paddingTop = "100px";

    img.setAttribute("style", "display: block; margin:auto; width: 200px;");
   
}

generarDiv("Cuando vas por la calle ¿Qué tipo de comunicación observamos a diario exceptuando los ruidos o las voces?", "background: rgb(0, 7, 66); width: 100%; height: 860px;", "background: brown; width: 15%; height: 150px; margin: 40px; border-radius: 8px;","background: royalblue; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: olivedrab; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: teal; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "Oral", "Textual", "Virtual", "Visual", "https://theamaranta.com/wp-content/uploads/2019/04/street-1024x683.jpg");
generarDiv("¿Cual es el opuesto de la cimunicación verbal?", "background:rgb(49, 3, 51); width: 100%; height: 860px;", "background:rgb(34, 185, 80); width: 15%; height: 150px; margin: 40px; border-radius: 8px;","background: teal; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background:rgb(238, 181, 58) ; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: rgb(238, 115, 58) ; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "Poemas escritos", "Canciones", "señales", "Periodicos", "http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg");
generarDiv("Normalmente, ¿como se comunica una persona sordo-muda?", "background:rgb(0, 61, 18); width: 100%; height: 860px;", "background:rgb(211, 23, 23); width: 15%; height: 150px; margin: 40px; border-radius: 8px;","background: teal; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: rgb(238, 181, 58); width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: grey; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "Por texto", "De forma gestual", "Por sonidos", "Dialogando", "https://scontent.fbog4-1.fna.fbcdn.net/v/t31.18172-8/14086331_1645354625780797_3187356212481370889_o.jpg?_nc_cat=100&ccb=1-4&_nc_sid=e3f864&_nc_ohc=GVBHaW4GppEAX_PpWCQ&_nc_ht=scontent.fbog4-1.fna&oh=0414838ef448194c1a26f34d861225f5&oe=61356F91");
generarDiv("Si no pudiéramos hablar ¿cuál sería la mejor forma para comunicarnos?", "background:rgb(1, 67, 71); width: 100%; height: 860px;", "background:olivedrab; width: 15%; height: 150px; margin: 40px; border-radius: 8px;","background: rgb(238, 181, 58); width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: rgb(0, 7, 66); width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: brown; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "Lenguaje de señas", "Mediante mensajeria", "La danza", "Mediante musica", "https://www.conapred.org.mx//fotos_noticias/lsm.jpg");
generarDiv("¿Cuál sería la expresión facial de tu madre al enterarse de que esperas un hijo?", "background:rgb(49, 3, 51); width: 100%; height: 860px;", "background:olivedrab; width: 15%; height: 150px; margin: 40px; border-radius: 8px;","background: rgb(238, 181, 58); width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: rgb(0, 7, 66); width: 15%; height: 150px; margin: 40px;border-radius: 8px", "background: brown; width: 15%; height: 150px; margin: 40px;border-radius: 8px", "Feliz", "Furiosa", "Sorpresa", "Depende", "https://www.nuovasalud.com/wp-content/uploads/2018/10/madre-e-hija.jpg");
