var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    /* Verifica se tem algo escrito */
    if (this.value.length > 0) {
        /* Laço para saber se o nome digitado é igual ao info-nome*/
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            /* Expressão Regular */ 
            var expressao = new RegExp(this.value, "i");

            /* .test retorna positivo se tiver o this.value na variável nome */
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            }
            else {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else {
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});