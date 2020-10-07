//Exercicios
//1.
let novaTarefa;
function criarTarefa() {
    const horas = document.getElementById("hora").value;
    const tarefa = document.getElementById("tarefa");
    if(tarefa.value !== " " ){
    const botao = document.getElementById("criar-tarefa");
    const diaDaSemana = document.getElementById("dias-semana").value;
    const semana = document.getElementById(diaDaSemana);
    semana.innerHTML += `<li class="riscados" onclick="riscarTarefa()">${tarefa.value}, ${horas} horas</li>`; 
    novaTarefa = (document.getElementsByClassName("riscados"));
    tarefa.value = " ";

    } else{
        alert("Digite uma tarefa"); 
    }
}
function riscarTarefa () {
    const riscados = document.getElementsByClassName("riscados")
    

    
    for (let i = 0; i < novaTarefa.length; i++){
        if ( novaTarefa[i] == riscados[i]){
                console.log ("funciona")
                riscados[i].style.textDecoration = "line-through";
                riscados[i].style.color = "green"
        }
    }      
}
function limparTudo (){
    const riscados = document.getElementsByClassName("conteudo")

    console.log("funciona")
    for (let i = 0; i < novaTarefa.length; i++){
        riscados[i].innerHTML = " "
    } 
}