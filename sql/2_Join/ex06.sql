CREATE DATABASE db_curso_da_minha_vida;
USE db_curso_da_minha_vida;

CREATE TABLE tb_categorias(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nomeCategoria VARCHAR(100) NOT NULL,
    descricaoCategoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_cursos(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    dataCriacao DATE
);

ALTER TABLE tb_cursos ADD COLUMN categoria_id BIGINT;

ALTER TABLE tb_cursos ADD CONSTRAINT fk_categoria_produtos
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);

INSERT INTO tb_categorias(nomeCategoria, descricaoCategoria) VALUES
("Desenvolvimento Web", "Cursos relacionados ao desenvolvimento de aplicações web"),
("Ciência de Dados", "Cursos sobre análise e interpretação de dados"),
("Segurança da Informação", "Cursos sobre proteção de sistemas e dados"),
("Redes de Computadores", "Cursos sobre configuração e administração de redes"),
("Inteligência Artificial", "Cursos sobre aprendizado de máquina e IA");

INSERT INTO tb_cursos (nome, preco, descricao, dataCriacao, categoria_id) VALUES
("Curso de Desenvolvimento Full Stack", 799.00, "Aprenda a desenvolver aplicações web do front-end ao back-end.", "2024-01-10", 1),
("Curso de Machine Learning", 999.00, "Aprenda as técnicas e algoritmos para construir modelos de machine learning.", "2024-01-05", 2),
("Curso de Ethical Hacking", 899.00, "Aprenda a identificar vulnerabilidades e proteger sistemas contra ataques.", "2023-10-20", 3),
("Curso de Administração de Redes", 699.00, "Aprenda a configurar e gerenciar redes de computadores.", "2024-04-10",4),
("Curso de Deep Learning", 1099.00, "Aprofunde-se no aprendizado profundo e suas aplicações.", "2024-01-15", 5),
("Curso de Desenvolvimento Web com React", 699.00, "Aprenda a desenvolver aplicações web usando o framework React.", "2023-08-12", 1),
("Curso de Análise de Dados com Python", 799.00, "Aprenda a manipular e analisar dados usando Python.", "2024-01-25", 2),
("Curso de Segurança de Redes", 749.00, "Aprenda a proteger redes contra ameaças internas e externas.", "2023-11-05", 3),
("Curso Full Stack JavaScript", 850.00, "Aprenda JavaScript do básico ao CRUD completo de um e-commerce.", "2024-12-05", 1);

SELECT * FROM tb_cursos WHERE preco > 500;
SELECT * FROM tb_cursos WHERE preco BETWEEN 600 AND 1000;
SELECT * FROM tb_cursos WHERE nome LIKE "%J%";

SELECT nome, preco, descricao, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_cursos INNER JOIN tb_categorias 
ON tb_cursos.categoria_id = tb_categorias.id;

SELECT nome, preco, descricao, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_cursos INNER JOIN tb_categorias 
ON tb_cursos.categoria_id = tb_categorias.id WHERE nomeCategoria = "Desenvolvimento Web";