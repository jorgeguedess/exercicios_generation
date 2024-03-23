# ATIVIDADE PRÁTICA – JAVASCRIPT

Exercícios resolvidos para a [Generation Brasil](https://brazil.generation.org/) e implementado em JavaScript.

- [Variaveis e Operadores](#variaveis-e-operadores)
- [Lacos Condicionais](#lacos-condicionais)
- [Loops](#loops)

<br/>

### Variaveis e Operadores

#### [Exercicio 01](1_Variaveis_Operadores/ex01.js)

Dado o Fluxograma abaixo, desenvolva o algoritmo abaixo: 


<div align="center">

![Início -> Digite o Salário -> Leia o Salário -> Digite o Abono: -> Leia o Abono -> NovoSalario = Salário + Abono -> Exibe o NovoSalario -> Fim](https://res.cloudinary.com/dklehn5qt/image/upload/v1710984083/generation_brasil/exercicios/javascript/01_entrada_saida_operadores/ex01-fluxograma_esyrya.png
)
![Entrada -> Salário: 10000; Abono: 1000; Saida -> Novo Salário: 11000](https://res.cloudinary.com/dklehn5qt/image/upload/v1710984083/generation_brasil/exercicios/javascript/01_entrada_saida_operadores/ex01_xdbmj8.png)

</div>

As variáveis devem ser do tipo **float**.
<br/>

#### [Exercicio 02](1_Variaveis_Operadores/ex02.js)

Elabore um algoritmo que leia 4 notas de um participante, em variáveis do tipo float e exiba na tela a média final do participante. Veja o exemplo abaixo:

![Entrada -> Nota 1: 10; Nota 2: 8; Nota 3: 7; Nota 4: 7.5; Saida -> Média final: 8.1](https://res.cloudinary.com/dklehn5qt/image/upload/v1710984083/generation_brasil/exercicios/javascript/01_entrada_saida_operadores/ex02_r3sdwt.png)

**CALCULAR MÉDIA** = (NOTA1 + NOTA2 + NOTA3 + NOTA4) / 4

<br/>

#### [Exercicio 03](1_Variaveis_Operadores/ex03.js)

Elabore um algoritmo que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, em variáveis do tipo float e exiba na tela o Salário Líquido. Veja o exemplo abaixo:

![Entrada -> Salário Bruto: 2000; Adicional Noturno: 500; Horas Extras: 100; Descontos: 200; Saida -> Salário Líquido: 2800](https://res.cloudinary.com/dklehn5qt/image/upload/v1710984083/generation_brasil/exercicios/javascript/01_entrada_saida_operadores/ex03_cvqrae.png)

**SALÁRIO LÍQUIDO** = SALÁRIO BRUTO + ADICIONAL NOTURNO + (HORAS EXTRAS * 5) - DESCONTOS

<br/>

#### [Exercicio 04](1_Variaveis_Operadores/ex04.js)

Leia quatro valores float (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4. Veja os exemplos abaixo:

![Entrada -> numero1: 5; numero2: 6; numero3: 7; numero4: 8; Saida -> Diferença: -26](https://res.cloudinary.com/dklehn5qt/image/upload/v1710984083/generation_brasil/exercicios/javascript/01_entrada_saida_operadores/ex04_grsncv.png)

**CALCULO** = (n1 * n2) – (n3 * n4)

<br/>

### Lacos Condicionais

#### [Exercicio 01](2_Lacos_Condicionais/ex01.js)

Faça um algoritmo em Java que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

![Imagem do Exercício 1](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072283/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex01_rpr4am.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional IF**

<br/>

#### [Exercicio 02](2_Lacos_Condicionais/ex02.js)

Escreva um algoritmo em Java, que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

![Imagem do Exercício 2](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072283/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex02_hiuuzi.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional IF**

<br/>

#### [Exercicio 03](2_Lacos_Condicionais/ex03.js)

Para doar sangue é necessário ter entre 18 e 69 anos de idade. Pessoas com idade entre 60 e 69 anos, só podem doar se não for a sua primeira doação. Escreva um Algoritmo em Java que obtenha via teclado o nome do doador (String), a idade (inteiro) do doador e se é a primeira doação (boolean). De acordo com as Regras para a doação, mostre na tela se o doador está Apto ou Não Apto para doar sangue. Veja os exemplos abaixo:

![Imagem do Exercício 3](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072284/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex03_cgw0pa.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional IF**

#### [Exercicio 04](2_Lacos_Condicionais/ex04.js)

Escreva um algoritmo em Java, que leia 3 palavras (String), que definem as características de um tipo de animal possível segundo o diagrama abaixo, que deve ser lido da esquerda para a direita.

![Tabela do Exercício 4](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072287/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex04_diagrama_nksfln.png)

Em seguida, mostre na tela qual dos animais foi escolhido, através das três palavras fornecidas:

![Imagem do Exercício 4](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072285/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex04_lfbzgb.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional IF**
- **No JavaScript, utilize o Operador Estritamente Igual (===)**

#### [Exercicio 05](2_Lacos_Condicionais/ex05.js)

Com base na tabela abaixo, escreva um algoritmo em Java que leia o código de um item (número inteiro de 1 a 6) e a quantidade comprada deste item (número inteiro). A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

![Tabela do Exercício 5](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072290/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex05_tabela_jx2cnj.png)

**Valor total = quantidade * preço**

Veja os exemplos abaixo:

![Imagem do Exercício 5](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072288/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex05_zz4ncp.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional Switch**

#### [Exercicio 06](2_Lacos_Condicionais/ex06.js)

Com base na tabela abaixo, escreva um algoritmo em Java que leia o Nome do Colaborador (String), o Código do Cargo do Colaborador (número inteiro de 1 a 6) e o Salário (número float). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado.

![Tabela do Exercício 6](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072292/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex06_tabela_mrtmbq.png)

**Novo Salário = salário + (reajuste * salário)**

Veja os exemplos abaixo:

![Imagem do Exercício 6](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072291/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex06_so8fbq.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional Switch**

#### [Exercicio 07](2_Lacos_Condicionais/ex07.js)

Com base na tabela abaixo, escreva um algoritmo em Java, que simule uma Calculadora simples. O programa deverá ler dois números float: **numero1** e **numero2**, e na sequência ler o Código da operação matemática (número inteiro de 1 a 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso a operação seja diferente do intervalo 1 a 4, mostre a mensagem **Operação Inválida!**

![Tabela do Exercício 7](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072294/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex07_tabela_vgud0d.png)

Veja os exemplos abaixo:

![Imagem do Exercício 7](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072294/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex07_riumro.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional Switch**

#### [Exercicio 08](2_Lacos_Condicionais/ex08.js)

Desenvolva um algoritmo em Java para uma conta bancária. O programa deverá ler o tipo de operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (float), será inicializada com o valor de R$ 1000.00. Caso a operação seja diferente do intervalo 1 a 3, mostre a mensagem **Operação Inválida!**

![Tabela do Exercício 8](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072297/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex08_tabela_zzjtme.png)

Veja os exemplos abaixo:

![Imagem do Exercício 8](https://res.cloudinary.com/dklehn5qt/image/upload/v1711072296/generation_brasil/exercicios/javascript/2_Lacos_Condicionais/ex08_wjhikp.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- **Laço Condicional Switch**

<br/>

### Loops

#### [Exercicio 01](3_Loops/ex01_for.js)

Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. **No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5**. Veja os exemplos abaixo:

![Imagem do Exercício 1](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157087/generation_brasil/exercicios/javascript/3_Loops/ex01_jqducg.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Laços Condicionais
- **Laço de Repetição FOR**

<br/>

#### [Exercicio 02](3_Loops/ex02_for.js)

Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:

![Imagem do Exercício 2](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157088/generation_brasil/exercicios/javascript/3_Loops/ex02_tpklgz.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição FOR**

<br/>

#### [Exercicio 03](3_Loops/ex03_while.js)

Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o **total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade seja maior que 50 anos**. **A leitura dos dados deve ser finalizada ao digitar uma idade negativa**. Veja o exemplo abaixo:

![Imagem do Exercício 3](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157089/generation_brasil/exercicios/javascript/3_Loops/ex03_dsuerq.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição WHILE**

<br/>

#### [Exercicio 04](3_Loops/ex04_while.js)

Uma empresa desenvolveu uma pesquisa interna para conhecer os colaboradores da área de Desenvolvimento e precisam de um sistema para analisar os dados. Escreva um algoritmo, que leia via teclado as seguintes informações de cada colaborador:

- **Idade (Número inteiro)**
    <br/>
- **Identidade de Gênero (Número Inteiro)**:
   - 1 – Mulher Cis
    - 2 – Homem Cis
    - 3 – Não Binário 
    - 4 – Mulher Trans
    - 5 – Homem Trans
    - 6 – Outros
    <br/>
    - **Pessoa Desenvolvedora (Número Inteiro)**:
    - 1 – Backend
    - 2 – Frontntend
    - 3 – Mobile
    - 4 – FullStack

**Após digitar a categoria, o sistema deverá perguntar ao usuário se ele deseja continuar a leitura dos dados de um novo colaborador ou não (S/N)**. Caso seja pressionada a tecla N, mostre na tela:

- O número de pessoas desenvolvedoras Backend
- O número de Mulheres Cis e Trans desenvolvedoras Frontend
- O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos
- O número de Não Binários desenvolvedores FullStack menores de 30 anos
- O número total de pessoas que responderam à pesquisa
- A média de idade das pessoas que responderam à pesquisa

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição WHILE**

<br/>

Veja o exemplo abaixo:

![Imagem do Exercício 4](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157090/generation_brasil/exercicios/javascript/3_Loops/ex04_jdb7we.png)

<br/>

#### [Exercicio 05](3_Loops/ex05_do_while.js)

Escreva um algoritmo, que leia números inteiros via teclado, **até que o número zero seja digitado**. Ao final, **mostre na tela a soma de todos os números digitados, que sejam positivos**. Veja o exemplo abaixo:

![Imagem do Exercício 5](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157091/generation_brasil/exercicios/javascript/3_Loops/ex05_jizdgd.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição DO…WHILE**

<br/>

#### [Exercicio 06](3_Loops/ex06_do_while.js)

Escreva um algoritmo, que **leia números inteiros via teclado, até que o número zero seja digitado**. Ao final, **mostre na tela a média de todos os números digitados, que sejam múltiplos de 3**. Veja o exemplo abaixo:

![Imagem do Exercício 6](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157093/generation_brasil/exercicios/javascript/3_Loops/ex06_uu36un.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição DO…WHILE**

<br/>

#### [Exercicio 07](3_Loops/ex07_vetores.js)

Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a **posição** deste número no vetor. Caso o número não seja encontrado, a mensagem: “**Não foi encontrado!**” deve ser exibida na tela. Veja os exemplos abaixo:

![Imagem do Exercício 7](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157097/generation_brasil/exercicios/javascript/3_Loops/ex07_e6wi5q.png)

<span style="color: #ff0000;font-style:italic;">* Os números em vermelho representam o índice (posição) do vetor.</span>

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Saída de dados
- Laços Condicionais
- Laço de Repetição
- **Vetores**

<br/>

#### [Exercicio 08](3_Loops/ex08_vetores.js)

Elabore um algoritmo que leia 10 números inteiros e armazene em um vetor. Em seguida, mostre na tela:

- Todos os elementos dos índices ímpares do vetor
- Todos os elementos do vetor que são números pares
- A Soma de todos os elementos do vetor
- A Média de todos os elementos do vetor, armazenada em uma variável do tipo real

Veja o exemplo abaixo:

![Imagem do Exercício 8](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157099/generation_brasil/exercicios/javascript/3_Loops/ex08_hccruw.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Laços Condicionais
- Laço de Repetição
- **Vetores**

<br/>

#### [Exercicio 09](3_Loops/ex09_matrizes.js)

Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
- Todos os elementos da Diagonal Principal
- Todos os elementos da Diagonal Secundária
- A Soma de todos os elementos da Diagonal Principal
- A Soma de todos os elementos da Diagonal Secundária

Veja o exemplo abaixo:

![Imagem do Exercício 9](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157100/generation_brasil/exercicios/javascript/3_Loops/ex09_otdhfo.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Laços Condicionais
- Laço de Repetição
- **Matrizes**

<br/>


#### [Exercicio 10](3_Loops/ex10_matrizes.js)

Elabore um algoritmo que leia as notas de uma classe com 10 participantes durante 4 bimestres de um ano. As 4 notas de cada participante serão armazenadas em uma linha de uma matriz de números reais, logo cada linha da matriz serão as notas de um participante. Em um vetor de números reais, armazene as médias de cada
participante e exiba as médias de cada um na tela 

Veja o exemplo abaixo:

![Imagem do Exercício 10](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157101/generation_brasil/exercicios/javascript/3_Loops/ex10_sbgqcl.png)

<span style="color: #ff0000;font-style:italic;">* No exemplo acima, as notas e as médias foram ajustadas para uma casa decimal.</span>


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Laços Condicionais
- Laço de Repetição
- **Matrizes**

<br/>