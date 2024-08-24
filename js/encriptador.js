//----- Selección de Elementos -----//
const elements = {
    btnEncriptar: document.querySelector(".btn-encriptar"),
    btnDesencriptar: document.querySelector(".btn-desencriptar"),
    txtEncriptar: document.querySelector(".encriptar"),
    aviso: document.querySelector(".texto-aviso"),
    respuesta: document.querySelector(".evaluar"),
    contenido: document.querySelector(".tarjeta-contenedor"),
    btnCopiar: document.querySelector(".btn-copiar"),
};

//----- Funciones Utilitarias -----//
function mostrarAviso(mensaje) {
    elements.aviso.style.cssText = `
        background: #0A3871;
        color: #FFFFFF;
        font-weight: 800;
    `;
    elements.aviso.textContent = mensaje;

    setTimeout(() => {
        elements.aviso.removeAttribute("style");
    }, 1500);
}

function esTextoValido(texto) {
    const textoNormalizado = texto.normalize("NFD").replace(/[\p{P}\p{S}\u0300-\u036f]/gu, "");

    if (texto.trim() === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
        return false;
    }

    if (texto !== textoNormalizado) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
        return false;
    }

    if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return false;
    }

    return true;
}

function procesarTexto(texto, modo) {
    const reemplazos = modo === 'encriptar'
        ? { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" }
        : { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" };

    for (const [clave, valor] of Object.entries(reemplazos)) {
        const regex = new RegExp(clave, "g");
        texto = texto.replace(regex, valor);
    }
    return texto;
}

function manejarProceso(e, modo) {
    e.preventDefault();
    const texto = elements.txtEncriptar.value;

    if (!esTextoValido(texto)) return;

    const textoProcesado = procesarTexto(texto, modo);
    elements.respuesta.innerHTML = textoProcesado;
    elements.btnCopiar.style.visibility = "inherit";
    elements.contenido.remove();
}

//----- Eventos de Botones -----//
elements.btnEncriptar.addEventListener("click", e => manejarProceso(e, 'encriptar'));
elements.btnDesencriptar.addEventListener("click", e => manejarProceso(e, 'desencriptar'));

elements.btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    const copiar = elements.respuesta;
    navigator.clipboard.writeText(copiar.textContent).then(() => {
        mostrarAviso("Texto copiado al portapapeles");
    });
});
