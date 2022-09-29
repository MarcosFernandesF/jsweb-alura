var botaoAdicionar = document.querySelector("#adicionar-paciente");

/* Podemos utilizar uma função nomeada ou anonima */
botaoAdicionar.addEventListener("click", adicionaPaciente);

function adicionaPaciente(event) {
    /* Evita o comportamento padrão do botão de recarregar a página e limpar os campos ao enviar o formulário*/
    event.preventDefault();
    
    /* Resgata informações do formulário */
    var form = document.querySelector("#form-adiciona");

    /* Recebendo Objeto Paciente */
    var paciente = obtemPacienteDoFormulario(form);

    var erro = validaPaciente(paciente);

    if (erro.length > 0) {
        exibeMensagensDeErro(erro);

        return; // Sai da função
    }

    adicionaPacienteNaTabela(paciente);

    /* Limpa o formulario */
    form.reset();

    /* Limpa erros após adicionar paciente */
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}

function adicionaPacienteNaTabela(paciente) {
    /* Criando Tr e Td's */
    var pacienteTr = montaTr(paciente);

    /* Colocando a Tr dentro da tabela */
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

/* Resgata informações do formulário */
function obtemPacienteDoFormulario(form) {

    // Criando objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

/* Criando Tr */
function montaTr(paciente) {

    // Criando novos elementos 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /* Colocando as Td's dentro da Tr */
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

/* Cria Td e preenche o conteudo */
function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

/* Validar os dados do paciente */
function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if(paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    
    if(paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco.");
    }

    if(paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro")
    ul.innerHTML = "";

    /* Para cada erro faça uma li com o conteudo do erro*/
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}