var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // querySelectorAll traz todas as ocorrencias daquela classe

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]; // Truque para trocar paciente por paciente[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = true;
    var alturaEhValida = true;
    
    if (peso <= 0 || peso > 1000) {
        console.log("Peso inválido");
        tdImc.textContent = "Peso Inválido!";
        pesoEhValido = false;
        // paciente.style.backgroundColor = "lightcoral"; // 'style' modifica o estilo do css
        paciente.classList.add("paciente-invalido") // classList adiciona uma classe ao elemento, importante pois pode ser alterado no css
    }
    
    if (altura <= 0 || altura > 3) {
        console.log("Altura inválida")
        tdImc.textContent = "Altura Inválida!";
        alturaEhValida = false;
        // paciente.style.backgroundColor = "lightcoral"; // 'style' modifica o estilo do css
        paciente.classList.add("paciente-invalido") // classList adiciona uma classe ao elemento, importante pois pode ser alterado no css
    }
    
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc; // to.Fixed escolhe quantas casas decimais deseja no código
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura*altura);

    return imc.toFixed(2);
}
