# Bem-vindos ao repositório do Desafio Klever

## Contexto

---

Esse projeto foi desenvolvido para uma vaga de Frontend na empresa [`Klever`](https://klever.io/).

A proposta era desenvolver a seguinte aplicação:

Uma Wish Wallet para adição de tokens onde será possível: Criar, editar e excuir um token.

## Requisitos

Home Page:
- Ao clicar no botão "Add Token" vá para a página "Add Token"
- Ao clicar no ícone "Edit" vá para a página "Edit Token"

Add Token:
- Ao clicar no botão "Back" vá para a página "Home"
- Ao clicar no ícone "Save" botão
  - Salve os dados no localStorage do navegador
  - Navegar o usuário para a página Home

Bônus:
- O nome do Token deve ser único, o usuário não deve ter nomes de token repetidos
- Exibir as mensagens de erro do formulário para o usuário

Edit Token
- Ao clicar no botão "Back" vá para a página "Home"
- Ao clicar no botão "Save"
  - Salve os dados no localStorage
  - Navegar o usuário para a página Home
- Ao clicar no botão "Remove"
  - Remova o dado do armazenamento local
  - Navegar o usuário para a página Home

Bonus
- Quando o usuário clicar no botão "Remove" deverá exibir um alerta ao usuário para confirmar a remoção.
  - Se confirmado, o token deve ser excluído
  - Se negado, o alerta fecha e o token não deve ser excluído


## Como instalar

Pre-requisitos para rodar o projeto:
- NPM

Copie o ssh do projeto `git@github.com:PatrickDack/desafio-klever.git`

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * git clone `git@github.com:PatrickDack/desafio-klever.git`
  * `cd desafio-klever`
  * `npm install`
  * `npm run dev`
  * Acesse o Endereço: `http://localhost:3000`

---

## Modo de utilização

A aplicação conta com 3 rotas:
  * `/` Essa é a Home Page onde será exibido sua lista de tokens, possui o botão Add Token para adicionar novos tokens e ao lado de cada token possui um icone para edita-lo.

  * `/addtoken` Possui um formulário para a adição de um novo token. O token deve possuir 3 caracteres e o balance não pode ser nulo, o botão de salvar ficará desabilitado até que todas as informações estejam preenchidas de forma correta, não é possível cadastrar um token com informções incompletas.

  * `/edittoken` Na Home ao clicar no icone de editar ao lado do token você será direcionado para essa rota que exibirá um formulário preenchido com as informções daquele token onde você poderá alterar suas informções e salva-lo. Não é possível alterar o nome do token para um nome já existente. Ao clicar no botão Remover, o token será excluido.

  * Ao digitar uma rota que não existe (Ex: `/rota-que-nao-existe`), o usuário será direcionado para uma rota informando que a página não existe. Ao clicar no logo da Klever será redirecionado para a Home.

---

## Modo de desenvolvimento

### Tecnologias

---

Foi utilizado para o desenvolvimento desse projeto o ReactJs e o Vite para a build.

---

## Próximos passos

* Implementação dos testes com Jest e RTL
* Validação do input do Balance
* Criar login para que cada pessoa tenha seus tokens salvos separadamente
* Criar backend com Nodejs e Express para cadasdro e gerenciamento de Users e Tokens
* Substituir o localStorage por MongoDB no backend
