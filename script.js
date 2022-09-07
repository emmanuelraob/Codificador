const input = document.querySelector("#area-texto");
const botonencriptar = document.querySelector("#boton-encriptar");
const botondesencriptar = document.querySelector("#boton-desencriptar");
const mensaje = document.querySelector("#area-respuesta");
const btnCopiar = document.querySelector("#boton-copiar");

//oculta lo que tiene que ocultar
document.getElementById('aparece-despues').style.display = 'none';



//boton encriptar 
document.getElementById('boton-encriptar').onclick = (e) => {
    e.preventDefault();
    const textoEncriptado = encriptar(input.value.toLowerCase());
    mensaje.value = textoEncriptado;
    input.value = "";
    aparece()
}

function encriptar(a){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    for (let i = 0; i < matriz.length; i++) {
        if (a.includes(matriz[i][0])) {
            a = a.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return a;
}


//boton desencriptar 
document.getElementById('boton-desencriptar').onclick = (e) => {
    e.preventDefault();
    const textoDesencriptado = desencriptar(input.value.toLowerCase());
    mensaje.value = textoDesencriptado;
    input.value = "";
    aparece()
}

function desencriptar(a){
    let matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    for (let i = 0; i < matriz.length; i++) {
        if (a.includes(matriz[i][1])) {
            a = a.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return a;
}

function aparece() {
    document.getElementById('aparece-despues').style.display = 'block';
    document.getElementById('aparece-primero').style.display = 'none';
}


//boton copiar 
document.getElementById('boton-copiar').onclick = (e) => {
    e.preventDefault();
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    aparece()
}