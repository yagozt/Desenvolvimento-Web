function AtividadeControle() {
    this.persistencia = new AtividadePersistencia();
    this.visao = new AtividadeVisao();
    
    this.atualizarLista = function(){
        var lista = this.persistencia.listarTodos();
        this.visao.carregarTudo(lista);
    }

    this.remover = function(id){
        this.persistencia.remover(id);
        this.atualizarLista();
    }

    this.salvar = function(nota){
        var n = this.visao.getNota(nota);
        this.persistencia.salvar(n);
        this.atualizarLista();
    }

    this.adicionarNota = function(){
        var nota = this.visao.getNovaNota();
        nota.status = 0;
        this.persistencia.salvar(nota);
        this.atualizarLista();
    }

    this.limparTudo = function(){
        this.persistencia.limpar();
        this.atualizarLista();
    }
}