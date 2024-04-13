CREATE DATABASE db_construindo_vidas;
USE db_construindo_vidas;

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

ALTER TABLE tb_produtos ADD COLUMN categoria_id BIGINT;

ALTER TABLE tb_produtos ADD CONSTRAINT fk_categoria_produtos
FOREIGN KEY (categoria_id) REFERENCES tb_categorias(id);

INSERT INTO tb_categorias (nomeCategoria, descricaoCategoria) VALUES
('Tintas', 'Materiais para pintura de paredes e superfícies'),
('Ferragens', 'Peças metálicas utilizadas em construção e reparos'),
('Elétrica', 'Componentes elétricos para instalações residenciais e industriais'),
('Hidráulica', 'Materiais para sistemas de água e esgoto'),
('Madeira', 'Produtos derivados de madeira para construção'),
('Ferramentas', 'Equipamentos manuais e elétricos para trabalhos de construção e reparo'),
('Iluminação', 'Luminárias e acessórios para iluminação residencial e comercial');

INSERT INTO tb_produtos (nome, preco, quantidade, dataCriacao,categoria_id) VALUES
('Tinta látex branca', 110.75, 100, '2024-04-12', 1),
('Prego comum', 84.99, 500, '2024-02-10', 2),
('Tomada 2P+T', 20.99, 200, '2024-01-20', 3),
('Tubo PVC 50mm', 140.50, 150, '2024-03-15', 4),
('Tábua de pinus', 35.99, 80, '2024-04-28', 5);

SELECT * FROM tb_produtos WHERE preco > 100;
SELECT * FROM tb_produtos WHERE preco BETWEEN 70 AND 150;
SELECT * FROM tb_produtos WHERE nome LIKE "%C%";

SELECT nome, preco, quantidade, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id;

SELECT nome, preco, quantidade, dataCriacao, nomeCategoria, descricaoCategoria
FROM tb_produtos INNER JOIN tb_categorias 
ON tb_produtos.categoria_id = tb_categorias.id WHERE nomeCategoria = "Hidráulica";