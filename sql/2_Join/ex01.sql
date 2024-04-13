CREATE DATABASE db_generation_game_online;
USE db_generation_game_online;

CREATE TABLE tb_classes(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL,
    atributo VARCHAR(50) NOT NULL
);

CREATE TABLE tb_personagens(
	id BIGINT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    ataque INT NOT NULL,
    defesa INT NOT NULL
);

SELECT * FROM tb_classes;
SELECT * FROM tb_personagens;

ALTER TABLE tb_personagens ADD COLUMN classe_id BIGINT;

ALTER TABLE tb_personagens ADD CONSTRAINT fk_classes_personagens
FOREIGN KEY (classe_id) REFERENCES tb_classes(id);

INSERT INTO tb_classes(tipo, atributo) VALUES
("Dragão", "Luz"),
("Guerreiro", "Terra"),
("Fada", "Vento"),
("Mago", "Fogo"),
("Zumbi", "Trevas");

INSERT INTO tb_personagens(nome, descricao, ataque, defesa, classe_id) VALUES
("Dragão de Espírito Branco", "Um dragão celestial que protege os inocentes com sua luz divina.", 2800, 2300, 1),
("Samurai da Terra", "Um guerreiro habilidoso que domina as técnicas ancestrais da terra.", 2200, 1800, 2),
("Fada dos Ventos", "Uma fada graciosa que traz ventos refrescantes e bênçãos da natureza.", 1900, 1600, 3),
("Mago das Chamas", "Um mago que controla o fogo ardente para incinerar seus inimigos.", 2400, 2000, 4),
("Zumbi das Trevas", "Um servo sombrio ressuscitado das profundezas para espalhar terror.", 1800, 1600, 5),
("Dragão de Luz Celestial", "Um majestoso dragão que irradia luz purificadora para derrotar as trevas.", 3000, 2500, 1),
("Guerreiro da Montanha", "Um combatente robusto que enfrenta qualquer desafio com coragem inabalável.", 2500, 2200, 2),
("Fada do Arco-Íris", "Uma fada encantadora que traz consigo as cores do arco-íris para proteger os inocentes.", 2100, 1800, 3);

SELECT * FROM tb_personagens WHERE ataque > 2000;
SELECT * FROM tb_personagens WHERE defesa BETWEEN 1000 AND 2000;
SELECT * FROM tb_personagens WHERE nome LIKE "%c%";

SELECT nome, descricao, ataque, defesa, tipo, atributo FROM tb_personagens INNER JOIN tb_classes 
ON tb_personagens.id = tb_classes.id;
