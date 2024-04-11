CREATE DATABASE db_agoradoce;
USE db_agoradoce;

CREATE TABLE tb_produtos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
	preco DECIMAL(10,2) NOT NULL,
    avaliacao INT NOT NULL,
    filtro VARCHAR(50),
    imageUrl VARCHAR(255) NOT NULL
);


INSERT INTO tb_produtos(nome,descricao,preco,avaliacao,filtro,imageUrl) VALUES
("Bolo de Frutas","Delicioso bolo com frutas frescas", 110.99, 3, "frutas", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-1.png?updatedAt=1712791862797"),
("Bolo de Chocolate","Saboroso bolo de chocolate irresistível", 599.99, 4, "chocolate", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-2.png?updatedAt=1712791862039"),
("Bolo de Oreo","Delícia de bolo recheado com biscoitos Oreo", 550.99, 5, "variados", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-3.png?updatedAt=1712791861870"),
("Bolo de Coco","Bolo com coco ralado, simplesmente divino", 150.99, 3, "frutas", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-4.png?updatedAt=1712791861952"),
("Bolo de Sorvete","Refrescante bolo de sorvete para todas as ocasiões", 219.99, 4, "variados", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-5.png?updatedAt=1712791862311"),
("Bolo de Morango","Bolo delicioso com morangos frescos", 509.99, 5, "morango", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-7.png?updatedAt=1712791862034"),
("Bolo de Kiwi","Bolo tropical com kiwi fresco", 130.99, 2, "frutas", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-9.png?updatedAt=1712791861852"),
("Cookies Chocolate","Biscoitos irresistíveis de chocolate", 4.99, 4, "chocolate", "https://ik.imagekit.io/w9xeqo8jy/AgoraDoce/Produtos/produto-11.png?updatedAt=1712791861891");

SELECT * FROM tb_produtos;

SELECT * FROM tb_produtos WHERE preco > 500;
SELECT * FROM tb_produtos WHERE preco < 500;

UPDATE tb_produtos SET descricao = "Explore a perfeição da doçura natural com nosso exuberante Bolo de Morango" WHERE id = 6;

SELECT * FROM tb_produtos WHERE id = 6;

SELECT * FROM tb_produtos;
