Exercício 1
====
A
---
rounds: é o custo indicado por 2 digitos que está relacionado com a segurança da senha. Quanto maior o valor, mais tempo de execução e maior segurança. O valor 12 é recomendado por padrão da lib e utilizarei este mesmo valor pelo mesmo motivo.

salt: é um bloco de string construído de maneira aleatória com 22 caracteres.

Exercício 2
======
A
----
Devemos primeiro começar pela construção do cadastro com a senha criptografada, pois no login será a base de comparação.

D
----
Não, por que o token é o resultado do login e é conferido no header

