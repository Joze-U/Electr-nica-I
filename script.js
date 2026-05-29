const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    const header = card.querySelector(".card-header");

    header.addEventListener("click", () => {

        cards.forEach(otherCard => {

            if(otherCard !== card){
                otherCard.classList.remove("active");
            }

        });

        card.classList.toggle("active");

    });

});

function calcularResistencia(){

    const voltaje = document.getElementById("voltaje").value;

    const corriente = document.getElementById("corriente").value;

    const resistencia = voltaje / corriente;

    document.getElementById("resultadoOhm").innerText =
        "Resistencia: " + resistencia.toFixed(2) + " Ω";
}

function calcularPotencia(){

    const voltaje =
        document.getElementById("voltajeW").value;

    const corriente =
        document.getElementById("corrienteW").value;

    const potencia = voltaje * corriente;

    document.getElementById("resultadoWatt").innerText =
        "Potencia: " + potencia.toFixed(2) + " W";
}

/* ========================================================= */
/* UNION PN */
/* ========================================================= */

let directa = true;

function cambiarPolarizacion(){

    const estado =
        document.getElementById("estadoPN");

    if(directa){

        estado.innerHTML =
        "Polarización Inversa: La corriente queda bloqueada.";

        estado.style.background =
        "rgba(239,68,68,0.1)";

    }

    else{

        estado.innerHTML =
        "Polarización Directa: La corriente puede circular.";

        estado.style.background =
        "rgba(40,111,243,0.1)";
    }

    directa = !directa;
}

/* ========================================================= */
/* LED */
/* ========================================================= */

function controlarLED(){

    const slider =
        document.getElementById("sliderLED");

    const led =
        document.getElementById("ledLight");

    const brillo = slider.value / 100;

    led.style.opacity = brillo;

    led.style.boxShadow =
        `0 0 ${20 + brillo * 40}px red`;
}

/* ========================================================= */
/* CONTROL DE CORRIENTE */
/* ========================================================= */

function controlarCorriente(){

    const slider =
        document.getElementById("sliderCorriente");

    const barra =
        document.getElementById("barraCorriente");

    const valor = slider.value;

    barra.style.width = valor + "%";

    if(valor < 35){

        barra.innerText =
        "Corriente Baja";

        barra.style.background =
        "#2563eb";
    }

    else if(valor < 70){

        barra.innerText =
        "Corriente Media";

        barra.style.background =
        "#d97706";
    }

    else{

        barra.innerText =
        "Corriente Alta";

        barra.style.background =
        "#dc2626";
    }

}

/* ========================================================= */
/* CONMUTACION */
/* ========================================================= */

let transistorActivo = false;

function activarTransistor(){

    const estado =
        document.getElementById("estadoTransistor");

    const led =
        document.getElementById("ledTransistor");

    if(transistorActivo){

        estado.innerText =
        "Transistor OFF";

        led.style.background =
        "#3f3f46";

        led.style.boxShadow =
        "none";
    }

    else{

        estado.innerText =
        "Transistor ON";

        led.style.background =
        "#22c55e";

        led.style.boxShadow =
        "0 0 30px #22c55e";
    }

    transistorActivo = !transistorActivo;
}

/* ========================================================= */
/* MOSFET */
/* ========================================================= */

function controlarMOSFET(){

    const slider =
        document.getElementById("sliderGate");

    const flujo =
        document.getElementById("flujoMOSFET");

    const estado =
        document.getElementById("estadoMOSFET");

    const valor = slider.value;

    flujo.style.width = valor + "%";

    if(valor < 35){

        estado.innerText =
        "Voltaje Bajo";

        estado.style.background =
        "rgba(59,130,246,0.12)";
    }

    else if(valor < 70){

        estado.innerText =
        "Voltaje Medio";

        estado.style.background =
        "rgba(234,179,8,0.12)";
    }

    else{

        estado.innerText =
        "Voltaje Alto";

        estado.style.background =
        "rgba(34,197,94,0.12)";
    }

}

/* ========================================================= */
/* AMPLIFICADORES */
/* ========================================================= */

function controlarGanancia(){

    const slider =
        document.getElementById("sliderGanancia");

    const salida =
        document.getElementById("ondaSalida");

    const texto =
        document.getElementById("textoGanancia");

    const valor = slider.value;

    salida.style.height =
        (80 + valor * 1.5) + "px";

    if(valor < 35){

        texto.innerText =
        "Ganancia Baja";
    }

    else if(valor < 70){

        texto.innerText =
        "Ganancia Media";
    }

    else{

        texto.innerText =
        "Ganancia Alta";
    }

}   

/* ========================================================= */
/* SCR */
/* ========================================================= */

let scrActivo = false;

function activarSCR(){

    const estado =
        document.getElementById("estadoSCR");

    const luz =
        document.getElementById("luzSCR");

    if(scrActivo){

        estado.innerText =
        "SCR Desactivado";

        luz.style.background =
        "#3f3f46";

        luz.style.boxShadow =
        "none";
    }

    else{

        estado.innerText =
        "SCR Activado";

        luz.style.background =
        "#facc15";

        luz.style.boxShadow =
        "0 0 35px #facc15";
    }

    scrActivo = !scrActivo;
}

/* ========================================================= */
/* TRIAC */
/* ========================================================= */

function controlarTRIAC(){

    const slider =
        document.getElementById("sliderTRIAC");

    const bombillo =
        document.getElementById("bombilloTRIAC");

    const texto =
        document.getElementById("textoTRIAC");

    const valor = slider.value;

    const brillo = valor / 100;

    bombillo.style.opacity = brillo;

    bombillo.style.boxShadow =
        `0 0 ${20 + brillo * 60}px #facc15`;

    if(valor < 35){

        texto.innerText =
        "Potencia Baja";
    }

    else if(valor < 70){

        texto.innerText =
        "Potencia Media";
    }

    else{

        texto.innerText =
        "Potencia Alta";
    }

}

/* ========================================================= */
/* SUBIR ARRIBA */
/* ========================================================= */

function subirArriba(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}