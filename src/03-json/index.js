const alunosJson = `[{ "nome": "Maria Joaquinha", "notas": [8,7.5,9], "curso": "Sistemas para Internet"}, { "nome": "João Ricardo", "notas": [8,8.5,5], "curso": "Direito"}, { "nome": "José Henrique", "notas": [4,10,7], "curso": "Administração"}, { "nome": "Pedro da Silva", "notas": [6,7.6,7.5], "curso": "Sistemas para Internet"}, { "nome": "Silvana Morais", "notas": [6,7.5,9.5], "curso": "Sistemas de Informação"}, { "nome": "Patricia Castro", "notas": [1,9,10], "curso": "Arquitetura"}, { "nome": "Joana Ribeiro", "notas": [8,9,9], "curso": "Contabilidade"}, { "nome": "Rafael Rocha", "notas": [4,4,9], "curso": "Sistemas para Internet"}, { "nome": "Gustavo Henrique", "notas": [8,7.5,5], "curso": "Sistemas para Internet"}]`;

/**
 * Imprime os alunos aprovados, ou seja, aqueles com média maior ou igual a 7
 *
 * @param {Record<string, any>[]} alunos - A lista de alunos
 */
function imprimirAlunosAprovados(alunos) {
	for (const aluno of alunos) {
		const media = calcularMedia(aluno.notas);

		if (media < 7) {
			continue;
		}
		console.log(
			`Nome: ${aluno.nome}. Curso: ${aluno.curso}. Média: ${media.toFixed(2)}`,
		);
	}
}

/**
 * Calcula a média de um aluno a partir de suas notas
 * @param {number[]} notas - As notas do aluno
 * @return {number} - A média do aluno
 */
function calcularMedia(notas) {
	const quantidadeNotas = notas.length;

	if (quantidadeNotas === 0) {
		return 0;
	}
	return notas.reduce((acc, nota) => acc + nota, 0) / quantidadeNotas;
}

function main() {
	const alunos = JSON.parse(alunosJson);

	imprimirAlunosAprovados(alunos);
}

main();
