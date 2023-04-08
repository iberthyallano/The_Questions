## Palindromo

Um palíndromo é uma string tal que sua reversão é igual à string original. Em outras palavras, é uma string que, quando lida de trás para frente, é igual à string original. Por exemplo, o BANANAB é um palíndromo, enquanto o BANANAS não. Neste problema estamos interessados em um assunto um pouco mais interessante.

Dada uma string S, queremos encontrar a MAIOR subsequência que seja um palíndromo (Strings de 1(um) caracter não serão considerados como palíndromo). Uma subsequência é uma string que pode ser obtida da remoção de zero ou mais caracteres da string original. Por exemplo, ANANA é a maior subsequência de BANANAS (retirando-se os caracteres nas posições 0 e 6).

---

EXEMPLO:

---

Entrada:

-  4
-  BANANAS
-  PATA
-  ANEL
-  A1A

Saída:

-  ANANA
-  ATA
-  sem resultados
-  entrada inválida

---

ENTRADA: A primeira linha contém um número inteiro T, indicando a quantidade de cenários a serem testados. Cada uma das T subsequentes linhas contém uma string S, onde 0 < len(S) ≤ 100 e S só poderá conter letras, ou seja, tem que pertencer ao intervalo [a, z].

SAÍDA: Para cada cenário de teste da entrada, caso o tamanho desta string seja maior que 1 (um) caracter, imprima a maior string encontrada. Caso contrário, imprima 'sem resultados'. No caso em que a entrada for inválida, imprima 'entrada inválida'.
