CREATE DATABASE db_farmacia_bem_estar;
USE db_farmacia_bem_estar;

CREATE TABLE tb_categorias(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nomeCategoria VARCHAR(100) NOT NULL,
    descricaoCategoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL
);

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

ALTER TABLE tb_produtos ADD COLUMN categoria_id BIGINT;

ALTER TABLE tb_produtos ADD CONSTRAINT fk_categoria_produtos
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);

INSERT INTO tb_categorias(nomeCategoria,descricaoCategoria) VALUES 
("Medicamentos","Categoria de medicamentos diversos"),
("Higiene Pessoal","Produtos de higiene pessoal"),
("Cosméticos","Produtos de beleza e cuidados pessoais"),
("Bebês e crianças","Produtos para bebês e crianças"),
("Alimentos e Bebidas","Alimentos e bebidas diversos");

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

INSERT INTO tb_produtos(nome,descricao,preco,quantidade,categoria_id) VALUES 
("Aspirina","Analgésico e antitérmico", 10.99, 100, 1),
("Shampoo","Shampoo para cabelos", 8.50, 50, 2),
("Batom","Batom vermelho matte", 61.99, 30, 3),
("Fraldas","Analgésico e antitérmico", 79.99, 100, 4),
("Água Mineral","Água mineral sem gás", 3.50, 200, 5),
("Paracetamol","Analgésico e antitérmico", 8.99, 80, 1),
("Condicionador","Condicionador para cabelos secos", 18.99, 40, 2),
("Creme Hidratante","Creme hidratante para o rosto", 20.50, 60, 3);

SELECT * FROM tb_produtos WHERE preco > 50;
SELECT * FROM tb_produtos WHERE preco BETWEEN 5 AND 60;
SELECT * FROM tb_produtos WHERE nome LIKE "%C%";

SELECT nome, descricao, preco, quantidade, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id;

SELECT nome, descricao, preco, quantidade, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id WHERE nomeCategoria = "Cosméticos";
