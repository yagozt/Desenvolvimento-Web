window.onload = function(){
    LoadFromStorage();
    document.getElementById("addTodo").addEventListener("click",AddNovoTodo);
}

var AddNovoTodo = function(){
    var novoTodo = document.getElementById("novoTodo");
    var todo = new Todo(novoTodo.value);
    novoTodo.value = "";
    if (localStorage.length === 0) {
        localStorage.setItem("quant", "1");
        localStorage.setItem("1",todo.descricao);
    } else {
        var quant = parseInt(localStorage.getItem("quant")) + 1;
        localStorage.setItem("quant",quant.toString());
        localStorage.setItem(quant.toString(), todo.descricao);
    }
    LoadFromStorage();
}


class Todo {
    constructor(descricao) {
        this.descricao = descricao;
        this.pronto = false;
    }
}

var LoadFromStorage = function(){
    var novaLista = document.createElement("ol");
    novaLista.id = "listaTodo";
    document.getElementById("divTodo").replaceChild(novaLista,document.getElementById("listaTodo"));

    if (localStorage.length > 0) {
        for (let index = 1; index < localStorage.length; index++) {
            const element = localStorage.getItem(index);
            preencheLista(element);
        }
    } else {
        localStorage.setItem("quant", "0");
    }
}

function preencheLista(item){
    var novoUl = document.createElement("li");
    novoUl.innerText = item;
    document.getElementById("listaTodo").appendChild(novoUl);
}