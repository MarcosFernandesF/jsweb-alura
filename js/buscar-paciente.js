var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){

    /* 1. */
    //XMLHttpRequest é um objeto do Js capaz de fazer requisições HTTP
    var xhr = new XMLHttpRequest(); 

    /* 2. Ensina qual o tipo de requisição a ser feita e pra onde ir */
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /* 3. Pega a requisição recém feita e envia */
    xhr.send();

    /* 4. Quando o site for carregado, executa uma função */
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        // Se a requisição de certo:
        if (xhr.status == 200) {
            erroAjax = document.add(".invisivel");

            // resposta recebe o texto do site requisitado
            var resposta = xhr.responseText;
                
            // Le um texto e retorna um objeto javascript
            var pacientes = JSON.parse(resposta);

            // Para cada objeto paciente ele coloca na tabela
            pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
            });
        }
        // Se não der certo
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

        
    });
});