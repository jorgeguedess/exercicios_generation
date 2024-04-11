CREATE DATABASE db_escola;
USE db_escola;

CREATE TABLE tb_estudantes(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
	serie VARCHAR(100) NOT NULL,
    notaFinal DECIMAL(3,1) NOT NULL,
    dataNascimento DATE NOT NULL
);

INSERT INTO tb_estudantes(nome,serie,notaFinal,dataNascimento) VALUES
("Ana Maria","4º ano - Ensino Fundamental", 9.5, "2015-03-15"),
("Maria Joaquina","5º ano - Ensino Fundamental", 7.0, "2014-10-20"),
("João Paulo","5º ano - Ensino Fundamental", 5.5, "2014-02-14"),
("Paula Menezes","1º ano - Ensino Médio", 8.0, "2010-01-10"),
("Pedro Fernandes","4º ano - Ensino Fundamental", 4.0, "2015-10-20"),
("Augusto Ribas","5º ano - Ensino Fundamental", 7.5, "2013-05-05"),
("Juliane Ferreira","1º ano - Ensino Médio", 10.0, "2010-04-06"),
("Fernanda Silva","8º ano - Ensino Fundamental", 7.0, "2012-06-28");

SELECT * FROM tb_estudantes WHERE notaFinal > 7;
SELECT * FROM tb_estudantes WHERE notaFinal < 7;

UPDATE tb_estudantes SET notaFinal = 7.5 WHERE id = 3;

SELECT * FROM tb_estudantes;