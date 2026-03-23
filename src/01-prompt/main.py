#!/usr/bin/env python3


import sys
from dataclasses import dataclass
from enum import StrEnum, auto
from typing import Self


@dataclass(frozen=True)
class Altura:
    valor: float

    def __post_init__(self):
        if self.valor <= 0:
            raise ValueError("A altura deve ser um valor positivo.")

    @classmethod
    def from_str(cls, altura_str: str) -> Self:
        try:
            valor = float(altura_str)
            return cls(valor)
        except ValueError:
            raise ValueError("A altura deve ser um número válido.")


class Genero(StrEnum):
    MASCULINO = auto()
    FEMININO = auto()


@dataclass(frozen=True)
class Pessoa:
    altura: Altura
    genero: Genero


def solicitar_dados_pessoa() -> Pessoa:
    while True:
        try:
            altura_input = input("  Digite a altura da pessoa (em metros): ")
            altura = Altura.from_str(altura_input)

            genero_input = (
                input(
                    f"  Digite o gênero da pessoa ({Genero.MASCULINO}/{Genero.FEMININO}): "
                )
                .strip()
                .lower()
            )
            genero = Genero(genero_input)

            return Pessoa(altura=altura, genero=genero)
        except ValueError as e:
            print(f"Entrada inválida: {e}. Por favor, tente novamente.")


@dataclass(frozen=True)
class Estatisticas:
    maior_altura: Altura
    menor_altura: Altura
    media_altura_homens: Altura
    quantidade_feminino: int


def gerar_estatisticas(pessoas: list[Pessoa]) -> Estatisticas:
    if not pessoas:
        raise ValueError("A lista de pessoas não pode estar vazia.")

    alturas = [pessoa.altura.valor for pessoa in pessoas]
    generos = [pessoa.genero for pessoa in pessoas]

    maior_altura = Altura(max(alturas))
    menor_altura = Altura(min(alturas))

    homens = [pessoa for pessoa in pessoas if pessoa.genero == Genero.MASCULINO]
    media_altura_homens = (
        Altura(sum(p.altura.valor for p in homens) / len(homens))
        if homens
        else Altura(0)
    )

    quantidade_feminino = sum(1 for genero in generos if genero == Genero.FEMININO)

    return Estatisticas(
        maior_altura=maior_altura,
        menor_altura=menor_altura,
        media_altura_homens=media_altura_homens,
        quantidade_feminino=quantidade_feminino,
    )


def main():
    pessoas: list[Pessoa] = []

    for i in range(15):
        print(f"Pessoa {i + 1}:")
        pessoa = solicitar_dados_pessoa()
        pessoas.append(pessoa)

    estatisticas = gerar_estatisticas(pessoas)
    print("\nEstatísticas:")
    print(f"  Maior altura: {estatisticas.maior_altura.valor:.2f} metros")
    print(f"  Menor altura: {estatisticas.menor_altura.valor:.2f} metros")
    print(
        f"  Média de altura dos homens: {estatisticas.media_altura_homens.valor:.2f} metros"
    )
    print(
        f"  Quantidade de pessoas do gênero feminino: {estatisticas.quantidade_feminino}"
    )


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nPrograma interrompido pelo usuário. Encerrando...")
        sys.exit(0)
