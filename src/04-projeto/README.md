# Projeto P2: Luxo Aluguel de Iates

Submissão da 2ª Avaliação de Aprendizagem da disciplina **Tecnologia para Frontend com Lógica Imperativa** da UNIESP.

## Projeto

O projeto estende o site da disciplina anterior com três páginas dinâmicas que se comunicam com uma API REST fornecida pelo professor:

- **`contato.html`:** formulário existente, agora persiste mensagens via `inserirMensagem()`.
- **`admin.html`:** nova página de login, autentica via `validarUsuario()` e marca a sessão como autorizada.
- **`mensagens.html`:** nova página restrita que lista as mensagens recebidas via `obterMensagens()`.

A autorização entre `admin.html` e `mensagens.html` é feita por meio de uma flag em `sessionStorage`.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+, sem frameworks no código da aplicação)
- jQuery (utilizado exclusivamente pelo `js/api.js` submetido pelo professor)

## Como executar

Basta abrir o arquivo `.html` desejado em qualquer navegador.

Credenciais válidas para o login (`admin.html`):

- **E-mail:** `admin@admin.com`
- **Senha:** `1234`

## Estrutura

```
04-projeto/
├── css/
│   ├── admin.css             # Overrides de layout das páginas restritas
│   ├── default.css           # Estilos compartilhados do site
│   └── mensagens.css         # Estilos da tabela de mensagens
├── images/
├── js/
│   ├── api.js                # Cliente da API (fornecido pelo professor)
│   └── jquery-3.6.4.min.js
├── admin.html
├── aluguel.html
├── contato.html
├── destinos.html
├── index.html
├── mensagens.html
└── tripulacao.html
```

## Autor

Vinícius Oliveira
