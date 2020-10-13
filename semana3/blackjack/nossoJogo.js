/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 alert("Bem vindo ao jogo de Blackjack!");
 

 // inicio do jogo
 if(confirm( "Quer iniciar uma nova rodada?" )){
   // jogador compra carta
   var carta1_do_jogador = comprarCarta();
   var carta2_do_jogador = comprarCarta();

   // computador compra carta
   var carta1_do_computador = comprarCarta();
   var carta2_do_computador = comprarCarta();

   // cálculo da pontuação
   var pontuacao_do_jogador = carta1_do_jogador.valor + carta2_do_jogador.valor;
   var pontuacao_do_computador = carta1_do_computador.valor + carta2_do_computador.valor;

   // impressão das cartas sorteadas e seus valores
   console.log("Usuário - cartas:", carta1_do_jogador.texto, carta2_do_jogador.texto, "- pontuação", String(pontuacao_do_jogador));
   console.log("Computador - cartas:", carta1_do_computador.texto, carta2_do_computador.texto, "- pontuação", String(pontuacao_do_computador));

   //resultados do jogo   
   if(pontuacao_do_computador === pontuacao_do_jogador){
      console.log("Empate!");
   }else if(pontuacao_do_jogador > pontuacao_do_computador){
      console.log("O usuário ganhou!");
   }else if(pontuacao_do_computador > pontuacao_do_jogador){
      console.log("O computador ganhou!");
   }
}else{
   console.log("O jogo acabou"); //Em caso da confirmação ser negativa o jogo
}
