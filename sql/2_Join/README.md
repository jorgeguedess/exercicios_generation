# ATIVIDADE PRÁTICA – SQL
## Join

Exercícios resolvidos para a [Generation Brasil](https://brazil.generation.org/) e implementado com SQL.

<br/>

#### [Exercicio 01](ex01.sql)

Crie um banco de dados para um serviço de um Games Online. O nome do Banco de dados deverá ter o seguinte nome **db_generation_game_online**. O sistema trabalhará com as informações dos personagens do jogo. O sistema trabalhará com 2 tabelas **tb_personagens** e tb_classes, que deverão estar relacionadas.

![Classe Classifica Personagem - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex01?updatedAt=1712977223971)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">

<li>
Crie a tabela tb_classes e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os personagens do Game Online.
</li>

<li>
Crie a tabela tb_personagens e determine 4 atributos, além da Chave Primária, relevantes aos personagens do Game Online.
</li>

<li>
Não esqueça de criar a Foreign Key da tabela tb_classes na tabela tb_personagens.
</li>

<li>
Insira 5 registros na tabela tb_classes.
</li>

<li>
Insira 8 registros na tabela tb_personagens, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_classes.
</li>

<li>
Faça um SELECT que retorne todes os personagens cujo poder de ataque seja maior do que 2000.
</li>

<li>
Faça um SELECT que retorne todes os personagens cujo poder de defesa esteja no intervalo 1000 e 2000.
</li>

<li>
Faça um SELECT utilizando o operador LIKE, buscando todes os personagens que possuam a letra C no atributo nome.
</li>

<li>
Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_personagens com os dados da tabela tb_classes.
</li>

<li>
Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_personagens com os dados da tabela tb_classes, onde traga apenas os personagens que pertençam a uma classe específica (Exemplo: Todes os personagens da classe dos arqueiros).
</li>

</ol>

<br/>

#### [Exercicio 02](ex02.sql)

Crie um banco de dados para um serviço de uma Pizzaria. O nome do Banco de dados deverá ter o seguinte nome **db_pizzaria_legal**. O sistema trabalhará com as informações dos produtos comercializados pela empresa. O sistema trabalhará com 2 tabelas **tb_pizzas** e **tb_categorias**, que deverão estar relacionadas.


![Categoria Classifica Pizza - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex02.png?updatedAt=1712977325197)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">

 <li>Crie a tabela tb_categorias com pelo menos 2 atributos relevantes além da Chave Primária para classificar as pizzas.</li>
<li>Crie a tabela tb_pizzas com 4 atributos relevantes além da Chave Primária para descrever os produtos da pizzaria.</li>
<li>Crie uma chave estrangeira na tabela tb_pizzas referenciando a tabela tb_categorias.</li>
<li>Insira 5 registros na tabela tb_categorias.</li>
<li>Insira 8 registros na tabela tb_pizzas, preenchendo a Chave Estrangeira para estabelecer a relação com a tabela tb_categorias.</li>
<li>Realize um SELECT para recuperar todas as pizzas cujo valor seja superior a R$ 45,00.</li>
<li>Realize um SELECT para recuperar todas as pizzas cujo valor esteja no intervalo entre R$ 50,00 e R$ 100,00.</li>
<li>Realize um SELECT utilizando o operador LIKE para buscar todas as pizzas cujo atributo nome contenha a letra M.</li>
<li>Realize um SELECT utilizando INNER JOIN para unir os dados das tabelas tb_pizzas e tb_categorias.</li>
<li>Realize um SELECT utilizando INNER JOIN para unir os dados das tabelas tb_pizzas e tb_categorias, trazendo apenas as pizzas que pertençam a uma categoria específica (por exemplo, todas as pizzas doces).</li>
</ol>

<br/>

#### [Exercicio 03](ex03.sql)

Crie um banco de dados para um serviço de uma Farmácia. O nome do Banco de dados deverá ter o seguinte nome **db_farmacia_bem_estar**. O sistema trabalhará com as informações dos produtos comercializados pela empresa. O sistema trabalhará com 2 tabelas **tb_produtos** e **tb_categorias**, que deverão estar relacionadas.

![Categoria Classifica Produto - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex03.png?updatedAt=1712977567691)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">

  <li>Crie a tabela tb_categorias e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os produtos.</li>
  <li>Crie a tabela tb_produtos e determine 4 atributos, além da Chave Primária, relevantes aos produtos da farmácia.</li>
  <li>Não esqueça de criar a Foreign Key da tabela tb_categorias na tabela tb_produtos.</li>
  <li>Insira 5 registros na tabela tb_categorias.</li>
  <li>Insira 8 registros na tabela tb_produtos, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_categorias.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor seja maior do que R$ 50,00.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor esteja no intervalo R$ 5,00 e R$ 60,00.</li>
  <li>Faça um SELECT utilizando o operador LIKE, buscando todos os produtos que possuam a letra C no atributo nome.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias, onde traga apenas os produtos que pertençam a uma categoria específica (por exemplo, todos os produtos que pertencem à categoria cosméticos).</li>
</ol>

<br/>

#### [Exercicio 04](ex04.sql)

Crie um banco de dados para um serviço de um Açougue ou de um Hortifruti. O nome do Banco de dados deverá ter o seguinte nome **db_cidade_das_carnes** ou **cidade_dos_vegetais**. O sistema trabalhará com as informações dos produtos comercializados pela empresa. O sistema trabalhará com 2 tabelas **tb_produtos** e **tb_categorias**, que deverão estar relacionadas.

![Categoria Classifica Produto - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex04.png?updatedAt=1712977567691)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">
  <li>Crie a tabela tb_categorias e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os produtos.</li>
  <li>Crie a tabela tb_produtos e determine 4 atributos, além da Chave Primária, relevantes aos produtos da farmácia.</li>
  <li>Não esqueça de criar a Foreign Key da tabela tb_categorias na tabela tb_produtos.</li>
  <li>Insira 5 registros na tabela tb_categorias.</li>
  <li>Insira 8 registros na tabela tb_produtos, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_categorias.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor seja maior do que R$ 50,00.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor esteja no intervalo entre R$ 50,00 e R$ 150,00.</li>
  <li>Faça um SELECT utilizando o operador LIKE, buscando todos os produtos que possuam a letra C no atributo nome.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias, onde traga apenas os produtos que pertençam a uma categoria específica (por exemplo, todos os produtos que pertençam à categoria aves ou frutas).</li>
</ol>

<br/>

#### [Exercicio 05](ex05.sql)

Crie um banco de dados para um serviço de uma loja de Material de Construção. O nome do Banco de dados deverá ter o seguinte nome **db_construindo_vidas**. O sistema trabalhará com as informações dos produtos comercializados pela empresa. O sistema trabalhará com 2 tabelas **tb_produtos** e **tb_categorias**, que deverão estar relacionadas.

![Categoria Classifica Produto - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex05.png?updatedAt=1712977567691)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">
<li>Crie a tabela tb_categorias e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os produtos.</li>
  <li>Crie a tabela tb_produtos e determine 4 atributos, além da Chave Primária, relevantes aos produtos da farmácia.</li>
  <li>Não esqueça de criar a Foreign Key da tabela tb_categorias na tabela tb_produtos.</li>
  <li>Insira 5 registros na tabela tb_categorias.</li>
  <li>Insira 8 registros na tabela tb_produtos, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_categorias.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor seja maior do que R$ 100,00.</li>
  <li>Faça um SELECT que retorne todos os produtos cujo valor esteja no intervalo entre R$ 70,00 e R$ 150,00.</li>
  <li>Faça um SELECT utilizando o operador LIKE, buscando todos os produtos que possuam a letra C no atributo nome.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_produtos com os dados da tabela tb_categorias, onde traga apenas os produtos que pertençam a uma categoria específica (por exemplo, todos os produtos que pertençam à categoria hidráulica).</li>
</ol>

<br/>

#### [Exercicio 06](ex06.sql)

Crie um banco de dados para uma plataforma de Cursos Online (EAD). O nome do Banco de dados deverá ter o seguinte nome **db_curso_da_minha_vida**. O sistema trabalhará com as informações dos produtos comercializados pela empresa. O sistema trabalhará com 2 tabelas **tb_cursos** e **tb_categorias**, que deverão estar relacionadas.

![Categoria Classifica Curso - Relação 1 a N](https://ik.imagekit.io/w9xeqo8jy/Generation/ex06.png?updatedAt=1712977567691)

**Boas Práticas:**

<ol style="display:flex;flex-direction:column;gap:0.5rem;">
<li>Crie a tabela tb_categorias e determine pelo menos 2 atributos, além da Chave Primária, relevantes para classificar os produtos.</li>
  <li>Crie a tabela tb_cursos e determine 4 atributos, além da Chave Primária, relevantes aos produtos da farmácia.</li>
  <li>Não esqueça de criar a Foreign Key da tabela tb_categorias na tabela tb_cursos.</li>
  <li>Insira 5 registros na tabela tb_categorias.</li>
  <li>Insira 8 registros na tabela tb_cursos, preenchendo a Chave Estrangeira para criar a relação com a tabela tb_categorias.</li>
  <li>Faça um SELECT que retorne todos os cursos cujo valor seja maior do que R$ 500,00.</li>
  <li>Faça um SELECT que retorne todos os cursos cujo valor esteja no intervalo entre R$ 600,00 e R$ 1000,00.</li>
  <li>Faça um SELECT utilizando o operador LIKE, buscando todos os cursos que possuam a letra J no atributo nome.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_cursos com os dados da tabela tb_categorias.</li>
  <li>Faça um SELECT utilizando a cláusula INNER JOIN, unindo os dados da tabela tb_cursos com os dados da tabela tb_categorias, onde traga apenas os cursos que pertençam a uma categoria específica (por exemplo, todos os cursos que pertençam à categoria Java).</li>
</ol>

<br/>
