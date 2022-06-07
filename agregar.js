// document.getElementById("guardar").addEventListener("click", saveWord);
var old_data;

//Funcion que añade palabra a la lista
function agregarPalabra(){
    let campo = document.getElementById("demo");
    var nuevaPalabra = document.querySelector(".input-texto").value;
    if (nuevaPalabra.length >= 2){
        if(isUpper(nuevaPalabra) == true && isWhiteSpace(nuevaPalabra) == false){
            listaPalabras.push(nuevaPalabra);
            console.log(listaPalabras);
            mostrarJuego();
        }else{
            campo.innerHTML = ("La palabra debe contener solo letras mayúsculas y sin espacios");
        }
    }else{
        campo.innerHTML = ("La palabra debe tener minimo 2 letras");
    }
    //Reseteamos el input texto
    document.getElementById("reset-form").reset();
    deshabilitarLetras();
} 

//Funcion para verificar si la palabra es totalmente mayúscula
function isUpper(str){
    return /[A-Z]/.test(str);
}

function isWhiteSpace(str){
    return /[^\S+$]/.test(str);
}

//Funcion para ocultar elementos del HTML
function mostrarAgregarPalabra(){
    document.getElementById('pantalla-principal').style.display = 'none';
    document.getElementById('agregar-nueva-palabra').style.display = 'block';
}
