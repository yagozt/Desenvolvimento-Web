var controle = new AtividadeControle();

window.onload = function(){
    
    controle.atualizarLista()
}

document.getElementById("addTodo").onclick = controle.adicionarNota();