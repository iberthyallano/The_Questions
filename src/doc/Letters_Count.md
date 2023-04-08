## Letters Count

Dada uma string S, queremos imprimir a quantidade de ocorrências de cada letra presente na string e retornar a quantidade de ocorrências para um caractere C.

---

EXEMPLO:

---

Entrada:

-  4
-  ARARA A
-  TORTA F
-  URUGUAIANA UR
-  PARALELEPIPEDO 1

Saída:

-  A(3); R(2)  
   3

-  T(2); O(1); R(1); A(1)  
   0

-  U(3); R(1); G(1); A(3); I(1); N(1)  
   consulta inválida

-  P(3); A(2); R(1); L(2); E(3); I(1); D(1); O(1)  
   consulta inválida

---

ENTRADA: A primeira linha contém um número inteiro T, indicando a quantidade de cenários a serem testados. Cada uma das T subsequentes linhas contém uma string S, onde 0 < len(S) ≤ 100, seguida por um único caractere C que deve pertencer ao intervalo [a, z].

SAÍDA: Para cada cenário de teste da entrada, caso o tamanho desta string seja maior que 1 (um) caracter, imprima a cada letra L encontrada com sua respectiva quantidade de ocorrências N L(N) e em seguida retornar a quantidade de ocorrências para o caractere C. Caso o caractere C não atenda aos requisitos de entrada, deverá retornar "consulta inválida"
