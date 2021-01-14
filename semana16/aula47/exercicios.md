<h1>Exercicio 1</h1>

<p>
a) Resposta:
FOREIGN é usado para fazer relações entre tabelas criadas. Ela deve ser sempre referenciada a PRIMARY KEY da tabela que deseja se relacionar
</p>

<p>
b) Resposta:
CREATE TABLE Rating (
		id INT PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);


INSERT INTO Rating (id, comment, rate, movie_id) VALUES
(1, 'Filme expetacular', 8.6, 'A'),
(2, 'Revolução no lançamento', 8.0, 'B'),
(3, 'Queridinho dos nerds', 8.6, 'C'),
(4, 'O primeiro foi melhor', 7.6, 'D');

SELECT * FROM Rating;
</p>

<p>
C) Resposta:
Não é possível adicionar uma nova linha quando não obedece a restrição da FOREIGN KEY, ou seja, se não houver correspondencia do dado cham
</p>

<p>
D) Resposta:
ALTER TABLE Movie DROP COLUMN rating
</p>

<p>
E) Resposta:
Não é possível excluir dados (filmes)que estão atrelados a outras tabelas (tabela de avaliação). Isso acontece por conta da restrição da chave estrageira (FOREIGN KEY)
</p>