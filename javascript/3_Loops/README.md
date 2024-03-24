# ATIVIDADE PRÁTICA – JAVASCRIPT
## Loops
Exercícios resolvidos para a [Generation Brasil](https://brazil.generation.org/) e implementado em JavaScript.


#### [Exercicio 01](ex01_for.js)

Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. **No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5**. Veja os exemplos abaixo:

![Imagem do Exercício 1](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157087/generation_brasil/exercicios/javascript/3_Loops/ex01_jqducg.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Laços Condicionais
- **Laço de Repetição FOR**

<br/>

#### [Exercicio 02](ex02_for.js)

Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares. Veja o exemplo abaixo:

![Imagem do Exercício 2](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157088/generation_brasil/exercicios/javascript/3_Loops/ex02_tpklgz.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição FOR**

<br/>

#### [Exercicio 03](ex03_while.js)

Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o **total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade seja maior que 50 anos**. **A leitura dos dados deve ser finalizada ao digitar uma idade negativa**. Veja o exemplo abaixo:

![Imagem do Exercício 3](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157089/generation_brasil/exercicios/javascript/3_Loops/ex03_dsuerq.png)


Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição WHILE**

<br/>

#### [Exercicio 04](ex04_while.js)

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

#### [Exercicio 05](ex05_do_while.js)

Escreva um algoritmo, que leia números inteiros via teclado, **até que o número zero seja digitado**. Ao final, **mostre na tela a soma de todos os números digitados, que sejam positivos**. Veja o exemplo abaixo:

![Imagem do Exercício 5](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157091/generation_brasil/exercicios/javascript/3_Loops/ex05_jizdgd.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição DO…WHILE**

<br/>

#### [Exercicio 06](ex06_do_while.js)

Escreva um algoritmo, que **leia números inteiros via teclado, até que o número zero seja digitado**. Ao final, **mostre na tela a média de todos os números digitados, que sejam múltiplos de 3**. Veja o exemplo abaixo:

![Imagem do Exercício 6](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157093/generation_brasil/exercicios/javascript/3_Loops/ex06_uu36un.png)

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Entrada e Saída de dados
- Operadores
- Laços Condicionais
- **Laço de Repetição DO…WHILE**

<br/>

#### [Exercicio 07](ex07_vetores.js)

Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a **posição** deste número no vetor. Caso o número não seja encontrado, a mensagem: “**Não foi encontrado!**” deve ser exibida na tela. Veja os exemplos abaixo:

![Imagem do Exercício 7](https://res.cloudinary.com/dklehn5qt/image/upload/v1711157097/generation_brasil/exercicios/javascript/3_Loops/ex07_e6wi5q.png)

<span style="color: #ff0000;font-style:italic;">* Os números em vermelho representam o índice (posição) do vetor.</span>

Na construção do Algoritmo, utilize os seguintes conteúdos:
- Saída de dados
- Laços Condicionais
- Laço de Repetição
- **Vetores**

<br/>

#### [Exercicio 08](ex08_vetores.js)

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

#### [Exercicio 09](ex09_matrizes.js)

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


#### [Exercicio 10](ex10_matrizes.js)

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