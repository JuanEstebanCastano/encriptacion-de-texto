/* const texArea = document.querySelector(".form_input")
const munheco =  document.querySelector(".munheco")
const tituloResultado = document.querySelector(".titulo_resultado")
const textoResultado = document.querySelector(".texto_resultado")
const btnEncriptar = document.querySelector(".btn_form")
const btnDesencriptar = document.querySelector(".btn_form")
const btnCopiar = document.querySelector(".btn_copiar")

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]

]
function encriptar(mensaje) {
    let mensajeEncriptado = ""
    for (let index = 0; index < mensaje.length; index++) {
        let letra = mensaje[index];
        let encriptada = letra

        for (let indexDos = 0; indexDos < llaves.length; indexDos++) {
            if (letra === llaves[indexDos][0]) {
                encriptada = llaves[indexDos][1]
                break
            }
        }
        mensajeEncriptado += encriptada
    }
    return mensajeEncriptado
}

function desencriptar(mensaje) {
    let mensajeDesencriptado = mensaje
    for (let index = 0; index < llaves.length; index++) {
        let regex = new RegExp(llaves[index][1], 'g')
        mensajeDesencriptado = mensajeDesencriptado.replace(regex,llaves[index][0])
    }
    return mensajeDesencriptado
}

texArea.addEventListener("input",(e)=>{
    munheco.style.display="none"
    console.log(e.target.value)
    tituloResultado.textContent = "Capturando Mensaje"
    textoResultado.textContent = ""
})

btnEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje= texArea.value.toLowerCase()
    let mensajeEncriptado = encriptar(mensaje)
    textoResultado.textContent = mensajeEncriptado
    btnCopiar.classList.remove("hidden")
    tituloResultado.textContent = "El resultado es: "
})
btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptar(mensaje);
    textoResultado.textContent = mensajeDesencriptado;
}); */

const texArea = document.querySelector(".form_input");
const munheco = document.querySelector(".munheco");
const tituloResultado = document.querySelector(".titulo_resultado");
const textoResultado = document.querySelector(".texto_resultado");
const btnEncriptar = document.querySelector(".btn_encriptar");
const btnDesencriptar = document.querySelector(".btn_desencriptar");
const btnCopiar = document.querySelector(".btn_copiar");

const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encriptar(mensaje) {
    let mensajeEncriptado = "";
    for (let index = 0; index < mensaje.length; index++) {
        let letra = mensaje[index];
        let encriptada = letra;

        for (let indexDos = 0; indexDos < llaves.length; indexDos++) {
            if (letra === llaves[indexDos][0]) {
                encriptada = llaves[indexDos][1];
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

function desencriptar(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let index = 0; index < llaves.length; index++) {
        let regex = new RegExp(llaves[index][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[index][0]);
    }
    return mensajeDesencriptado;
}

texArea.addEventListener("input", (e) => {
    munheco.style.display = "none";
    tituloResultado.textContent = "Capturando Mensaje";
    textoResultado.textContent = "";
});

btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeEncriptado = encriptar(mensaje);
    textoResultado.textContent = mensajeEncriptado;
    btnCopiar.classList.remove("hidden");
    tituloResultado.textContent = "El resultado es:";
    tituloResultado.style.color = ('#0abb30');
});

btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let mensaje = texArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptar(mensaje);
    textoResultado.textContent = mensajeDesencriptado;
    tituloResultado.textContent = "El resultado es:";
});


btnCopiar.addEventListener("click", () => {
    
    navigator.clipboard.writeText(textoResultado.textContent)// Usando la api Clipboard pra copiar en el portapapeles
    tituloResultado.textContent = "El fue Copiado";
    munheco.style.display = "block";
});