function AtividadeVisao() {
    this.limparTudo = function(){
        document.getElementById("listaTodo").innerHTML = "";
        alert("Todas as notas apagadas.");
    }

    this.getNovaNota = function(){
        var nota = {};
        var novaNota = document.getElementById("novoTodo");
        nota.descricao = novaNota.value;

        novaNota.value = "";
        return nota;
    }

    this.getNota = function(input){
        var nota = {};
        nota.descricao = input.innerText;
        nota.id = input.id;
        input.classList.toggle("completed");
        if(input.classList.contains("completed")){
            nota.status = 1;
        }
        else{
            nota.status = 0;
        }

        return nota;
    }

    this.carregarTudo = function(lista){
        var listaTodo = document.getElementById("listaTodo");
        listaTodo.innerHTML = "";
        var listaInput = "";
        lista.forEach(element => {
            var input = "";
            var remove = '<span onclick="controle.remover(' + element.id + ');">' + '<i class="fas fa-trash-alt"></i></span>';
            if (element.status == 0) {
                input = '<li onclick="controle.salvar(this)" id="' + element.id + '">' + remove + element.descricao + '</li>';
            } else {
                input = '<li class="completed" onclick="controle.salvar(this)" id="' + element.id + '">' + remove + element.descricao + '</li>';
            }
            listaInput += input;
        });
        listaTodo.innerHTML = listaInput;
    }

}