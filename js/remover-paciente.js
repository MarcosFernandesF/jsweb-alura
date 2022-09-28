var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("tbody");

/* Dessa forma e possivel remover pacientes adicionados pelo formulario */
tabela.addEventListener("dblclick", function(event){
    /* O event pode falar qual filho foi clicado */
    var alvoEvento = event.target
    /* parentNode pega o pai do elemento*/
    var paiDoAlvo = alvoEvento.parentNode

    paiDoAlvo.classList.add("fadeOut");

    // Adiciona um delay de 500 ms e depois faz a ação
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 500);

});


/* No entanto dessa forma não removemos pacientes que são adicionados pelo formulario*/
/* Em cada paciente ele vai adicionar um evento de duplo clique
// Utiliza função anonima
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        this.remove(); // this significa quem acionou o evento
    });
});*/