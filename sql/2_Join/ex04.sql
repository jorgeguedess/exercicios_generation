CREATE DATABASE db_cidade_dos_vegetais;
USE db_cidade_dos_vegetais;

CREATE TABLE tb_categorias(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nomeCategoria VARCHAR(100) NOT NULL,
    descricaoCategoria VARCHAR(255) NOT NULL
);

CREATE TABLE tb_produtos(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    quantidade INT NOT NULL,
    dataCriacao DATE
);

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

ALTER TABLE tb_produtos ADD COLUMN categoria_id BIGINT;

ALTER TABLE tb_produtos ADD CONSTRAINT fk_categoria_produtos
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);

INSERT INTO tb_categorias(nomeCategoria,descricaoCategoria) VALUES 
("Frutas","Diversas frutas frescas"),
("Vegetais","Vegetais frescos e orgânicos"),
("Verduras","Diversas verduras frescas"),
("Legumes","Diferentes tipos de legumes"),
("Ervas","Diversas ervas frescas");

SELECT * FROM tb_categorias;
SELECT * FROM tb_produtos;

INSERT INTO tb_produtos(nome,preco,quantidade,dataCriacao,categoria_id) VALUES 
('Maçã', 10.99, 20, '2024-04-01', 1),
('Banana', 8.99, 30, '2024-04-04', 1),
('Alface', 1.99, 15, '2024-04-06', 3),
('Tomate', 7.99, 25, '2024-04-04', 2),
('Cenoura', 4.99, 20, '2024-04-02', 4),
('Morango', 5.99, 10, '2024-04-10', 1),
('Batata', 4.99, 30, '2024-04-11', 4),
('Cebola', 2.79, 25, '2024-04-05', 5),
('Cesta de Frutas Gourmet', 59.99, 2, '2024-04-12',1);

SELECT * FROM tb_produtos WHERE preco > 50;
SELECT * FROM tb_produtos WHERE preco BETWEEN 50 AND 150;
SELECT * FROM tb_produtos WHERE nome LIKE "%C%";

SELECT nome, preco, quantidade, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id;

SELECT nome, preco, quantidade, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id WHERE nomeCategoria = "Frutas";