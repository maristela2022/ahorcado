var listaPalabras = ["ALURA","AHORCADO", "ORACLE", "HTML", "CSS", "JAVASCRIPT"];

var btn = document.getElementById("obtener-palabra");
btn.addEventListener("click", crearPalabraSecreta);

var desistir = document.getElementById("desistir");
desistir.addEventListener("click", salir);

var iniciarJuego = document.getElementById("iniciar");
iniciarJuego.addEventListener("click", deshabilitarLetras);

var numeroRandom;
var palabra;
array1 = new Array();
array2 = new Array();
var letra;
var repetida = new Array();
var aciertos;
var oportunidad;
var letraRepetida = 0;
var desactivarLetra;
var habilitarTeclas = document.querySelectorAll("#teclado button");
var palabraAdivinar = document.getElementById("palabra-a-adivinar");

//Funcion que da una palabra al azar
function crearPalabraSecreta() {
    aciertos = 0;
    oportunidad = 6;
    numeroRandom = Math.floor(Math.random() * (listaPalabras.length));
    palabra = listaPalabras[numeroRandom];
    console.log(palabra);
    // resetearLetras();
    for(let i = 0; i < 27; i++){
        habilitarTeclas[i].disabled = false;
        habilitarTeclas[i].style.background = "white";
            
    }
    repetida = new Array();
    crearGuiones();
}

//Funcion que crea los guiones dependiendo de la longitud de la palabra
function crearGuiones() {
    palabraAdivinar.innerHTML = "";
    for (var i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        palabraAdivinar.appendChild(span);
        
    }
    dibujarAhorcado();
}

const letras_teclado = document.querySelectorAll("#teclado button");
for (var i = 0; i < letras_teclado.length; i++) {
    letras_teclado[i].addEventListener("click", capturarLetras);
}

//Funcion que captura las letras ingresadas por el usuario
function capturarLetras(event) {
    desactivarLetra = event.target;
    letra = event.target.textContent;
    if(palabra.length != 0){
        desactivarLetra.disabled = true;
    }
    compararLetras();
}

//Funcion que compara la palabra secreta con lo que el usuario digitó y dibuja la letra correcta
function compararLetras() {
    const spans = document.querySelectorAll("#palabra-a-adivinar span")
    if (palabra.includes(letra) == true) {
        for (var i = 0; i < palabra.length; i++) {
            if (palabra.includes(letra) == true) {
                if (palabra[i + 0] == letra && repetida.includes(letra) == false) {
                    aciertos++;
                    spans[i].innerHTML = letra;
                    desactivarLetra.style.background = "green";
                }
            }
        }
    }else if (palabra.includes(letra) == false && repetida.includes(letra) == false) {
        oportunidad--;
        dibujarAhorcado();
        console.log("Oportunidad es " + oportunidad);
        desactivarLetra.style.background = "red";
    }
    repetida.push(letra);
    if (aciertos == palabra.length) {
        setTimeout(ganaste, 500);

    }
    if (oportunidad == 0) {
        setTimeout(perdiste, 500);
    }
}

//Funcion que te dice si ganaste
function ganaste(){
    alert("GANASTE!!");
    // window.location.reload();
    resetearLetras();
    deshabilitarLetras();
}

function perdiste(){
    alert("Perdiste!!, la palabra era: " + palabra);
    // window.location.reload();
    resetearLetras();
    deshabilitarLetras();
}

const img = document.getElementById("ahorcado-imagen");
let ahorcado = document.createElement("IMG");

//Función que dibuja el ahorcado
function dibujarAhorcado(){
    switch ( oportunidad ){
        case 6: ahorcado.setAttribute("src", "imagenes2/ahorcado1.png");
        img.appendChild(ahorcado);
        break;
        case 5: ahorcado.setAttribute("src", "imagenes2/ahorcado2.png");
        img.appendChild(ahorcado);
        break;
        case 4: ahorcado.setAttribute("src", "imagenes2/ahorcado3.png");
        img.appendChild(ahorcado);
        break;
        case 3: ahorcado.setAttribute("src", "imagenes2/ahorcado4.png");
        img.appendChild(ahorcado);
        break;
        case 2: ahorcado.setAttribute("src", "imagenes2/ahorcado5.png");
        img.appendChild(ahorcado);
        break;
        case 1: ahorcado.setAttribute("src", "imagenes2/ahorcado6.png");
        img.appendChild(ahorcado);
        break;
        case 0: ahorcado.setAttribute("src", "imagenes2/ahorcado7.png");
        img.appendChild(ahorcado);
        
    }
 }

 //Funcion para ocultar elementos del HTML
 function mostrarJuego(){
     document.getElementById('jugar-ahorcado').style.display = 'block';
     document.getElementById('agregar-nueva-palabra').style.display = 'none';
     document.getElementById('pantalla-principal').style.display = 'none';
     
 }
 //Funcion para ocultar elementos del HTML
 function mostrarMenuPrincipal(){
    document.getElementById('pantalla-principal').style.display = 'block';
    document.getElementById('jugar-ahorcado').style.display = 'none';
    document.getElementById('agregar-nueva-palabra').style.display = 'none';
 }

 //Funcion que activa las teclas deshabilitadas
 function resetearLetras(){
    
    for(let i = 0; i < 27; i++){
        habilitarTeclas[i].disabled = false;
        habilitarTeclas[i].style.background = "white";
            
    }
    aciertos = 0;
    oportunidad = 6;
    repetida = new Array();
    palabraAdivinar.innerHTML = "";
}

function deshabilitarLetras(){
    for(let i = 0; i < 27; i++){
        habilitarTeclas[i].disabled = true;
            
    }
}

//Funcion para que al presionar el boton desistir se borre el ahorcado
function salir(){
    crearPalabraSecreta();
    palabraAdivinar.innerHTML = "";
}