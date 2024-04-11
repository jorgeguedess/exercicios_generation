CREATE DATABASE db_RH;
USE db_RH;

CREATE TABLE tb_colaboradores(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(100) NOT NULL,
    data_admissao DATE NOT NULL,
    salario DECIMAL(10, 2) NOT NULL
);

INSERT INTO tb_colaboradores(nome,cargo,data_admissao,salario) VALUES
("João","Diretor","2018-03-15",30000),
("Maria","Gerente","2019-05-04",6208),
("Beatriz","Consultor","2018-04-20",4857),
("Manoela","Recrutador","2023-10-15",2149),
("Bernardo","Estagiário","2024-01-04",1179);

SELECT * FROM tb_colaboradores;

SELECT * FROM tb_colaboradores WHERE salario > 2000;
SELECT * FROM tb_colaboradores WHERE salario < 2000;

UPDATE tb_colaboradores SET salario = 7200 WHERE id = 2;