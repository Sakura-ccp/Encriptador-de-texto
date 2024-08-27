// function encriptar() {
//     let texto = document.getElementById("Texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");

//     let textoCifrado = texto
//         .replace(/a/gi, "ai")
//         .replace(/e/gi, "enter")
//         .replace(/i/gi, "imes")
//         .replace(/o/gi, "ober")
//         .replace(/u/gi, "ufat");

//     if (texto.length !=0 ) {
//         texto = textoCifrado;
//         tituloMensaje.textContent = "Texto encriptado con exito";
//         parrafo.textContent = "";
//         muñeco.src ="./assets/encriptado.jpg";
//     } else {
//         muñeco.src = "./assets/Muñeco.png";
//         tituloMensaje.textContent = "Ningun mensaje fue encontrado"
//         parrafo.textContent = "Ingrese el texto que desea encriptar o desencriptar"
//         alert("Debes ingresar algun texto");
//         swal("Ooops!", "Debes ingresar un texto", "warning");
//     }
// }

// function desencriptar() {
//     let texto = document.getElementById("texto").value;
//     let tituloMensaje = document.getElementById("titulo-mensaje");
//     let parrafo = document.getElementById("parrafo");
//     let muñeco = document.getElementById("muñeco");

//     let textoCifrado = texto
//     .replace(/ai/gi, "a")
//     .replace(/enter/gi, "e")
//     .replace(/imes/gi, "i")
//     .replace(/ober/gi, "o")
//     .replace(/ufat/gi, "u");

//     if (texto.length != 0) {
//         document.getElementById("texto").value = textoCifrado;
//         tituloMensaje.textContent = "Texto desencriptado con éxito";
//         parrafo.textContent = "";
//         muñeco.src = "./img/desencriptado.jpg";
//     } else {
//         muñeco.src = "./img/muñeco.png";
//         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
//         parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
//         swal("Ooops!", "Debes ingresar un texto", "warning");
//     }
// }

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringdesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringdesencriptada.includes(matrizCodigo[i][0])) {
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringdesencriptada
}
function copiar() {
    const textoCopiado = document.getElementById("mensaje");
    textoCopiado.select(); // Seleccionar el texto
    document.execCommand("copy"); // Copiar el texto seleccionado
}