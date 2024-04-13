CREATE DATABASE db_pizzaria_legal;
USE db_pizzaria_legal;

CREATE TABLE tb_categorias(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    cobertura VARCHAR(50) NOT NULL
);

CREATE TABLE tb_pizzas(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10,2) NOT NULL,
    avaliacao INT NOT NULL
);

SELECT * FROM tb_categorias;
SELECT * FROM tb_pizzas;

ALTER TABLE tb_pizzas ADD COLUMN categoria_id BIGINT;

ALTER TABLE tb_pizzas ADD CONSTRAINT fk_categoria_pizzas
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);

INSERT INTO tb_categorias(tipo,cobertura) VALUES 
("Salgada","Tomate"),
("Salgada","Calabresa"),
("Salgada","Frango"),
("Salgada","Bacon"),
("Salgada","Champignon"),
("Salgada","Presunto"),
("Doce","Ovomaltine"),
("Doce","Brigadeiro");

SELECT * FROM tb_categorias;


INSERT INTO tb_pizzas(nome,descricao,preco,avaliacao,categoria_id) VALUES 
("Pizza Calabresa","Queijo, calabresa e cebola, oregano.", 39.00, 5, 2),
("Pizza Corn & Bacon","Queijo, bacon, oregano e milho.", 45.00, 3, 4),
("Pizza Margherita","Queijo, tomate, oregano e manjericão.", 43.00, 3, 1),
("Pizza de Presunto","Queijo, oregano e presunto.", 54.00, 4, 6),
("Pizza Pão de Alho","Queijo, pão ciabatta, pasta de alho, parmesão ralado e orégano.", 50.00, 3, 1),
("Pizza Frango com Requeijão Especial","Frango desfiado, cebola, oregano e requeijão", 51.00, 5, 3),
("Pizza Extravaganzza","Queijo, pepperoni, presunto, azeitona preta, champignon, cebola, oregano e pimentão verde.", 57.00, 3,5),
("Pizza América","Queijo, pepperoni, champignon, cebola, oregano e pimentão verde.", 48.00, 2,5),
("Pizza de Ovomaltine","Brotinho recheada com creme de baunilha e creme de ovomaltine® crocante.", 65.00, 5,7),
("Pizza de Brigadeiro","Brotinho de brigadeiro com creme de baunilha ,brigadeiro de chocolate e granulado.", 59.00, 4,8);

SELECT * FROM tb_pizzas WHERE preco > 50;
SELECT * FROM tb_pizzas WHERE preco BETWEEN 50 AND 100;
SELECT * FROM tb_pizzas WHERE nome LIKE "%m%";

SELECT nome, descricao, preco, avaliacao, tipo, cobertura
FROM tb_pizzas INNER JOIN tb_categorias 
ON tb_pizzas.id = tb_categorias.id;

SELECT nome, descricao, preco, avaliacao, tipo, cobertura
FROM tb_pizzas INNER JOIN tb_categorias 
ON tb_pizzas.categoria_id = tb_categorias.id WHERE tipo = "Doce";
