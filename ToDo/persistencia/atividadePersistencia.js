function AtividadePersistencia() {
    this.limpar = function (){
        localStorage.clear();
    }

    this.salvar = function(nota){
        if(nota.id === undefined){
            var id = parseInt(localStorage.getItem("quant"));
            nota.id = id + 1;
            localStorage.setItem("quant", id + 1);
        }
        localStorage.setItem(nota.id, JSON.stringify(nota));
    }

    this.remover = function(id){
        localStorage.removeItem(id);
    }

    this.listarTodos = function(){
        var lista = [];

        if (localStorage.getItem("quant") === null) {
            localStorage.setItem("quant","0");
        }

        var quant = parseInt(localStorage.getItem("quant"));
        
        for (let index = 1; index <= quant; index++) {
            const element = JSON.parse(localStorage.getItem(index));
            if (element !== null) {
                lista.push(element);    
            }
        }

        return lista;
    }
}