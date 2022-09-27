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

    /* Criando Tr e Td's */
    var pacienteTr = montaTr(paciente);

    /* Colocando a Tr dentro da tabela */
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    /* Limpa o formulario */
    form.reset(); 
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