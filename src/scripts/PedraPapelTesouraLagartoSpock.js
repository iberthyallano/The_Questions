const vitoria = `Bazinga!`;
const derrota = `Raj trapaceou!`;
const empate = `De novo!`;

function getResultadoJogada(jogada) {
   let dicionarioJogadas = {
      "PEDRA PEDRA": empate,
      "PEDRA PAPEL": derrota,
      "PEDRA TESOURA": vitoria,
      "PEDRA LAGARTO": vitoria,
      "PEDRA SPOCK": derrota,

      "PAPEL PEDRA": vitoria,
      "PAPEL PAPEL": empate,
      "PAPEL TESOURA": derrota,
      "PAPEL LAGARTO": derrota,
      "PAPEL SPOCK": vitoria,

      "TESOURA PEDRA": derrota,
      "TESOURA PAPEL": vitoria,
      "TESOURA TESOURA": empate,
      "TESOURA LAGARTO": vitoria,
      "TESOURA SPOCK": derrota,

      "LAGARTO PEDRA": derrota,
      "LAGARTO PAPEL": vitoria,
      "LAGARTO TESOURA": derrota,
      "LAGARTO LAGARTO": empate,
      "LAGARTO SPOCK": vitoria,

      "SPOCK PEDRA": vitoria,
      "SPOCK PAPEL": derrota,
      "SPOCK TESOURA": vitoria,
      "SPOCK LAGARTO": derrota,
      "SPOCK SPOCK": empate,
   };

   return dicionarioJogadas[jogada] != undefined
      ? dicionarioJogadas[jogada]
      : `Jogada Inválida`;
}

function pedraPapelTesouraLagartoSpock(jogadas) {
   let entrada = jogadas.toUpperCase().split("\n");
   let result = ``;
   for (let i = 1; i <= parseInt(entrada[0]); i++) {
      result += `Caso #${i}: ${getResultadoJogada(entrada[i])}${
         i == parseInt(entrada[0]) ? `` : `\n`
      }`;
   }
   return result;
}

module.exports = pedraPapelTesouraLagartoSpock;
