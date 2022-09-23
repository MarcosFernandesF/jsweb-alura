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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2); // to.Fixed escolhe quantas casas decimais deseja no código
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

/* Podemos utilizar uma função nomeada ou anonima */
botaoAdicionar.addEventListener("click", adicionaPaciente);

function adicionaPaciente(event) {
    /* Evita o comportamento padrão do botão de recarregar a página e limpar os campos ao enviar o formulário*/
    event.preventDefault();
    
    /* Resgata informações do formulário */
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var imc = peso / (altura * altura);

    /* Criando novos elementos */
    var pacienteTr = document.createElement("tr");
    
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    /* Preenchendo com conteúdo */
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc.toFixed(2);

    /* Colocando as Td's dentro da Tr */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /* Colocando a Tr dentro da tabela */
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}
