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