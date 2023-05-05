const textArea = document.getElementById('textarea')
const botonEncriptar = document.querySelector(".buttonEncriptar");
const botonDesencriptar = document.querySelector(".buttonDesencriptar");
let imprimirMensajeEncriptado = document.getElementById("textAreaCaja3")

botonEncriptar.onclick = verificacion;

function verificacion(evento){

    let texto = textArea.value;
    let textMinusculas = texto.toLowerCase();

    if(texto === textMinusculas && /^[a-zA-Z\s]*$/.test(texto) && /^[a-zA-Z\s]*$/.test(texto)){
        versionEncriptada(texto);            
    }else {
    alert("El texto no esta completamente en minusculas. Intente de nuevo")
        location.reload();
   }   
}

function versionEncriptada(texto){
    
    let cadena = "";

    for (let i =0; i< texto.length; i++){
        switch(texto[i]){
            case "e":
                frase = "enter";
                break;
            case "i":
                frase = "imes";
                break;
            case "a":
                frase = "ai";
                break;
            case "o":
                frase = "ober";
                break;      
            case "u":
                frase = "ufat";
                break; 

            default:
                frase =texto[i];
                break;
        }
        cadena = cadena + frase;
    }  
    mostrarMensajeEncriptado(cadena);       
}

function mostrarMensajeEncriptado(cadena){
    document.getElementById("textAreaCaja3").style.backgroundImage = "none";
    document.querySelector(".texto1").style.display = "none";
    document.querySelector(".texto2").style.display = "none";
    imprimirMensajeEncriptado.innerHTML = cadena;    
    agregarBotonCopiar(cadena);  
    textarea.value ="";   
    botonDesencriptar.style.pointerEvents = 'auto';
    botonEncriptar.style.pointerEvents = 'none';
}

function agregarBotonCopiar(cadena){
    const botonCopiar = document.createElement('button');
    botonCopiar.innerText = 'Copiar';

    botonCopiar.addEventListener('click', function() {       
        const areaDeTextoTemp = document.createElement('textarea');
        areaDeTextoTemp.value = cadena;
        document.body.appendChild(areaDeTextoTemp);
        areaDeTextoTemp.select();
        document.execCommand('copy');
        document.body.removeChild(areaDeTextoTemp);      
        alert('Texto copiado al portapapeles, por favor pegue el texto en el cuadro de texto y posteriormente presione la tecla desencriptar');
    });
    const contenedor = document.querySelector('.caja3');
    contenedor.appendChild(botonCopiar);    
}

botonDesencriptar.onclick = versionDesencriptada;

function versionDesencriptada(){
   
    let texto = textArea.value; 
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];

    for (let i = 0; i < matrizCodigo.length; i++) {
        
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
    }    
    imprimirMensajeEncriptado.innerHTML = texto;
}





