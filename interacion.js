const textoIngresado = document.getElementById('textoIngresado')
const textoEjecutado = document.getElementById('textoEjecutado')
const botonEncriptar = document.getElementById("buttonEncriptar");
const botonDesencriptar = document.getElementById("buttonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar")
const contenedorDeImagen = document.getElementById("contenedorDeImagen")
const contenedorEjecutado = document.getElementById("contenedorEjecutado")
const textoRestricciones = document.getElementById("textoRestricciones");

showHidden()
textoIngresado.focus();    /*Posiciona puntero */

const matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

botonEncriptar.addEventListener("click", versionEncriptada);
botonDesencriptar.addEventListener("click",versionDesencriptada);  
botonCopiar.addEventListener("click", ActivarBotonCopiar);  

function verificacion(){
    const texto = textoIngresado.value.split("");  /*Divide una cadena en subcadenas de caracteres individuales */
    const cadena = texto.find((caracter) => (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90) || (caracter.charCodeAt() >= 192 && caracter.charCodeAt() <= 255));
    if (cadena) return false
    return true
}

function versionEncriptada(){
        
    if(verificacion()){
        
        let texto = textoIngresado.value;

        for (let i = 0; i < matrizCodigo.length; i++) {
            if(texto.includes(matrizCodigo[i][0])){
                texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
            }        
        }  
        showHidden();
        imprimirTexto(texto);
        limpiarTexto();
    } else {
        textoEquivocado();
    }
}

function showHidden() {
    if (textoIngresado.value === "") {
        contenedorEjecutado.style.display = "none"
        contenedorDeImagen.style.display = "block"
    } else {
        contenedorEjecutado.style.display = "flex"
        contenedorDeImagen.style.display = "none"
    }
}

function imprimirTexto(texto) {
    textoEjecutado.innerHTML = texto;
   
}

function limpiarTexto(){
    textoIngresado.value = "";
    textoIngresado.focus(); 
}

function textoEquivocado() {

    const colorNuevo = textoRestricciones.style.color;
    const tamañoNuevo = textoRestricciones.style.fontSize;

    textoRestricciones.style.color = "red";    
    textoRestricciones.style.fontSize = "20px";

    setTimeout(function() {
        textoRestricciones.style.color = colorNuevo;
        textoRestricciones.style.fontSize = tamañoNuevo;
      }, 3000);
    
    limpiarTexto();    
}


function versionDesencriptada(){
        
    if(verificacion()){
        
        let texto = textoIngresado.value;

        for (let i = 0; i < matrizCodigo.length; i++) {
            if(texto.includes(matrizCodigo[i][1])){
                texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
            }        
        }  
        showHidden();
        imprimirTexto(texto);
        limpiarTexto();
    } else {
        textoEquivocado();
    }
}

function ActivarBotonCopiar(){
    textoEjecutado.select();
    navigator.clipboard.writeText(textoEjecutado.value);  
    limpiarTexto();  
}


