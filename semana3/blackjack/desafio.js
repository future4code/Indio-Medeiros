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
   
if(confirm( "Quer iniciar uma nova rodada?" )){
   // compras de cartas
   var cartas_do_jogador = [comprarCarta(), comprarCarta()];
   var cartas_do_computador = [comprarCarta(), comprarCarta()];

   //verificação de cartas
   var dois_ases= ["A♦️", "A♥️", "A♣️", "A♠️"];
   for( let i = 0; i < 4; i++){
      if(cartas_do_jogador[0] ===  dois_ases[i] && cartas_do_jogador[1] === dois_ases[i] || cartas_do_computador[0] === dois_ases[i] && cartas_do_computador[1] === dois_ases[i]){
         // jogador compra carta
         cartas_do_jogador = [comprarCarta(), comprarCarta()];
         // computador compra carta
         cartas_do_computador = [comprarCarta(), comprarCarta()];
      }
   }
   // cálculo inicial da pontuação 
   var pontuacao_do_jogador = cartas_do_jogador[0].valor + cartas_do_jogador[1].valor;
   var pontuacao_do_computador = cartas_do_computador[0].valor + cartas_do_computador[1].valor;
   
   var i = 2; //um contador
   //verifica se o jogador quer pegar mais cartas e calcula uma nova pontuação para o jogador
   var msg = [`Suas cartas são ${cartas_do_jogador[0].texto} ${cartas_do_jogador[1].texto}`,  ` A carta revelada do computador é ${cartas_do_computador[0].texto}`, ". \n Deseja comprar mais uma carta?"];
   var mensagem_de_confirmacao = confirm(msg);
   while ((mensagem_de_confirmacao) && (pontuacao_do_jogador <= 21)){
      cartas_do_jogador[i] = comprarCarta();
      pontuacao_do_jogador += cartas_do_jogador[i].valor;
      msg[0] += " " + cartas_do_jogador[i].texto;
      i++   
   }

   //computador pega carta se jogador não pegar
   i = 2;
   while ((!mensagem_de_confirmacao) && (pontuacao_do_computador < pontuacao_do_jogador ) ){
      cartas_do_computador[i] = comprarCarta();
      pontuacao_do_computador += cartas_do_computador[i].valor;
      msg[1] = "" + cartas_do_computador[i].texto;
      i++   
   }
   
   
   //resultado final
   if(pontuacao_do_computador > 21 && pontuacao_do_jogador <= 21){
     var resultado_final = "Parabéns! você ganhou."
   }else if ( pontuacao_do_jogador > 21){
     var resultado_final = "O computador ganhou!."
   }else if ( pontuacao_do_jogador === pontuacao_do_computador){
      var resultado_final = "empate!."
   }
   //ajustando a mensagem para a mensagem do final
   msg.pop();
   msg.pop();
   //mensagem final
   alert(msg + "." + " Sua pontuação é " + pontuacao_do_jogador + "." + "\n" + "As cartas do computador são " + cartas_do_computador[0].texto + " " + cartas_do_computador[1].texto + "." + " A pontuação do computador é " + pontuacao_do_computador + "." + "\n" + resultado_final)
}
