/**
 * @typedef {Object} Pessoa
 * @property {number} altura - A altura da pessoa, formatada como string com duas casas decimais (e.g. "1.60")
 * @property {string} genero - O gênero da pessoa, normalizado para maiúsculas (e.g. "MASCULINO" ou "FEMININO")
 */

/**
 * Solicita a entrada de altura e gênero para uma pessoa, validando os dados e retornando um objeto com as informações.
 *
 * @param id {number} - O índice da pessoa para a qual os dados estão sendo solicitados
 * @return {Pessoa|null} - Retorna um objeto com a altura e gênero ou null se a entrada for cancelada
 */
function solicitarEntrada(id) {
	const altura = solicitarAltura(id);

	if (!altura) {
		return null;
	}

	const genero = solicitarGenero(id);

	if (!genero) {
		return null;
	}

	return { altura, genero };
}

/**
 * Solicita a entrada da altura para uma pessoa, validando o formato e retornando a altura formatada como string com duas casas decimais.
 *
 * @param indice {number} - O índice da pessoa para a qual a altura está sendo solicitada
 * @return {number|null} - Retorna a altura formatada como string com duas casas decimais ou null se a entrada for cancelada
 */
function solicitarAltura(indice) {
	while (true) {
		const resposta = prompt(
			`Insira a altura para pessoa ${indice} (e.g. 1.60)`,
		);

		if (!resposta) {
			return null;
		}

		try {
			return Number.parseFloat(resposta).toFixed(2);
		} catch (_) {
			alert(
				`Entrada inválida para altura: ${resposta}. Por favor, insira um número válido (e.g. 1.60).`,
			);
		}
	}
}

const GENEROS_PERMITIDOS = ["MASCULINO", "FEMININO"];

/**
 * @param indice {number} - O índice da pessoa para a qual o gênero está sendo solicitado
 *
 * @return {string|null} - Retorna o gênero normalizado (em maiúsculas) ou null se a entrada for cancelada
 */
function solicitarGenero(indice) {
	while (true) {
		const resposta = prompt(
			`Insira o gênero para pessoa ${indice} (Masculino/Feminino)`,
		);

		if (!resposta) {
			return null;
		}

		const respostaNormalizada = resposta.toUpperCase();
		const respostaValida = GENEROS_PERMITIDOS.includes(respostaNormalizada);

		if (!respostaValida) {
			alert(
				`Entrada inválida para gênero: ${resposta}. Por favor, insira "Masculino" ou "Feminino".`,
			);
			continue;
		}
		return respostaNormalizada;
	}
}

/**
 * @typedef {Object} Estatisticas
 * @property {number} maiorAltura - A maior altura registrada entre todas as pessoas
 * @property {number} menorAltura - A menor altura registrada entre todas as pessoas
 * @property {number} mediaAlturaMasculino - A média de altura das pessoas do gênero masculino
 * @property {number} quantidadeFeminino - A quantidade de pessoas do gênero feminino
 */

/**
 * Gera estatísticas a partir dos dados coletados.
 *
 * @param pessoas {Pessoa[]} - Um array de objetos representando as pessoas registradas
 * @return {Estatisticas} - Retorna um objeto contendo as estatísticas calculadas
 */
function gerarEstatisticas(pessoas) {
	const homens = pessoas.filter((p) => p.genero === "MASCULINO");
	const quantidadeFeminino = pessoas.length - homens.length;
	const alturasHomens = homens.map((h) => h.altura);
	const todasAlturas = pessoas.map((p) => p.altura);
	const mediaAlturaMasculino =
		homens.length > 0
			? alturasHomens.reduce((a, b) => a + b, 0) / homens.length
			: 0;

	return {
		maiorAltura: Math.max(...todasAlturas),
		menorAltura: Math.min(...todasAlturas),
		mediaAlturaMasculino,
		quantidadeFeminino,
	};
}

function main() {
	const quantidade = 15;
	const ids = Array.from({ length: quantidade }, (_, i) => i + 1);
	const pessoas = [];

	for (const id of ids) {
		try {
			const pessoa = solicitarEntrada(id);

			if (!pessoa) {
				alert("Entrada cancelada. Encerrando o programa.");
				return;
			}

			pessoas.push(pessoa);
		} catch (e) {
			alert(`Erro ao registrar dados para pessoa ${id}: ${e.message}`);
		}
	}

	const estatisticas = gerarEstatisticas(pessoas);

	alert(
		`Estatísticas:\nMaior Altura: ${estatisticas.maiorAltura}\nMenor Altura: ${estatisticas.menorAltura}\nMédia de Altura Masculino: ${estatisticas.mediaAlturaMasculino}\nQuantidade de Feminino: ${estatisticas.quantidadeFeminino}`,
	);
}

main();
