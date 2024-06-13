let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio();
console.log(numeroSecreto)
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campos = document.querySelector(tag);
    campos.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
exibirTextoNaTela('h1','Jogo Do Número Secreto!');
exibirTextoNaTela('p','Escolha um número entre 1 e 10:');



function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute==numeroSecreto){
        let palavraFormatada = chute > 1 ? 'tentativas':'tentativa';
        let mensagem = `Voce acertou o numero Secreto, com ${tentativas} ${palavraFormatada}`;
        tentativas - tentativas
        exibirTextoNaTela('h1','Acertou !!!');
        exibirTextoNaTela('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limparCampo()


    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O Numero secreto é Menor');
            tentativas += 1
            limparCampo()
        }


        else {
            exibirTextoNaTela('p','O Numero Secreto é maior');
            tentativas += 1
            limparCampo()
        }

    }

}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function zerarLista(){
   return listaDeNumerosSorteados = [];
}   


function numeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let tamanho = listaDeNumerosSorteados.length;
   if (tamanho==numeroLimite)[
    zerarLista()
   ] 
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
        console.log(numeroAleatorio);
    } 
    else{
        listaDeNumerosSorteados.push(numeroEscolhido);
       return numeroEscolhido;





    }  



} 


function limparTentativas(){
    tentativas = 0;
}

function novoJogo(){
    exibirTextoNaTela('h1','Jogo Do Número Secreto!');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10:');
    numeroSecreto = numeroAleatorio();
    limparTentativas();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}