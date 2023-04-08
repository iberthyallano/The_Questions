const pedraPapelTesouraLagartoSpock = require("../src/scripts/PedraPapelTesouraLagartoSpock");

test("Teste Exemplo", () => {
   let game = `3\npapel pedra\nlagarto tesoura\nSpock Spock`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: Bazinga!\nCaso #2: Raj trapaceou!\nCaso #3: De novo!`
   );
});

test("Teste Pedra", () => {
   let game = `5\npedra pedra\npapel pedra\ntesoura pedra\nlagarto pedra\nSpock pedra\n`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: De novo!\nCaso #2: Bazinga!\nCaso #3: Raj trapaceou!\nCaso #4: Raj trapaceou!\nCaso #5: Bazinga!`
   );
});

test("Teste Papel", () => {
   let game = `5\npedra papel\npapel papel\ntesoura papel\nlagarto papel\nSpock papel\n;`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: Raj trapaceou!\nCaso #2: De novo!\nCaso #3: Bazinga!\nCaso #4: Bazinga!\nCaso #5: Raj trapaceou!`
   );
});

test("Teste Tesoura", () => {
   let game = `5\npedra tesoura\npapel tesoura\ntesoura tesoura\nlagarto tesoura\nSpock tesoura\n`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: Bazinga!\nCaso #2: Raj trapaceou!\nCaso #3: De novo!\nCaso #4: Raj trapaceou!\nCaso #5: Bazinga!`
   );
});

test("Teste Lagarto", () => {
   let game = `5\npedra lagarto\npapel lagarto\ntesoura lagarto\nlagarto lagarto\nSpock lagarto\n`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: Bazinga!\nCaso #2: Raj trapaceou!\nCaso #3: Bazinga!\nCaso #4: De novo!\nCaso #5: Raj trapaceou!`
   );
});

test("Teste Spock", () => {
   let game = `5\npedra Spock\npapel Spock\ntesoura Spock\nlagarto Spock\nSpock Spock\n`;
   expect(pedraPapelTesouraLagartoSpock(game)).toBe(
      `Caso #1: Raj trapaceou!\nCaso #2: Bazinga!\nCaso #3: Raj trapaceou!\nCaso #4: Bazinga!\nCaso #5: De novo!`
   );
});
