var boton = document.getElementById("botoncito");
var texto = document.getElementById("textos_lineas");
boton.addEventListener("click", dibujoPorClick);
var d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    let lineas = parseInt(texto.value);
    var l = 0;
    var colorcito = "#CdA";
    var espacio = d.height / lineas;
    let initY = 0;


    for (l = 0; l < lineas; l++) {
        dibujarLinea(colorcito, 0, initY, 300, initY);
        initY = initY + espacio;
    }
    initY = 0;
    espacio = d.width/ lineas;
    for (l = 0; l < lineas; l++) {
        dibujarLinea(colorcito, initY, 300, initY, 0);
        initY = initY + espacio
    }

}