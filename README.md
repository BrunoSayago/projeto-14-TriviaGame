# Projeto 14 - Trivia Game

Oi. Este foi um dos projetos que eu fiz durante meu curso na Trybe. Confira os detalhes dele abaixo.




## Nome do Projeto
Trivia Game (Jogo de Trivia)

## Linguagens e Ferramentas Utilizadas

 - JavaScript
 - HTML
 - CSS
 - [Biblioteca React](https://pt-br.reactjs.org/)
 - [React Router](https://reactrouter.com/en/main)
 - [Redux](https://redux.js.org/)
 - [React Redux](https://react-redux.js.org/)


## Objetivos do Projeto
A aplicação desenvolvida neste projeto foi uma carteira de controle de gastos, com conversor de moedas. A pessoa usuária é capaz de: adicionar, remover e editar um gasto; visualizar uma tabelas com seus gastos; e visualizar o total de gastos convertidos para uma moeda de escolha. 
O intuito desse projeto foi colocar em prática as habilidades desenvolvidas com o Redux (no caso, o Redux em conjunto com o React) dentre elas: criar um store; criar reducers; criar actions; criar dispatchers; conectar Redux aos componentes React; e criar actions assíncronas na sua aplicação React que faz uso de Redux.

<br/>
Abaixo estão capturas de tela do projeto (vale lembrar que o objetivo principal do projeto era desenvolver a aplicação com foco na arquitetura do site utilizando React e Redux, e, por isso, não foi desenvolvido o CSS, portanto a aplicação está sem estilização).
<br/>

<br/>
Página Inicial de login, e clicando "enter", que redireciona para a carteira:

![Screenshot Inicial](screenshot1.gif)

<br/>
Na página de carteira podemos ver os itens:

 - 1 A moeda padrão, para a qual valores serão convertidos.
 - 2 O valor gasto total (todos gastos somados), convertido para a moeda padrão.
 - 3 O formulário de preenchimento dos gastos, com as áreas de Valor, descrição do gasto, moeda em que foi feito, método de pagamento, tipo de gasto, e o botão para adicioná-lo.
 - 4 A tabela que contêm todos gastos adicionados.

![Screenshot carteira vazia](screenshot2.png)


<br/>
O gif abaixo mostra um gasto sendo adicionado:

![Screenshot adicionando gasto](screenshot3.gif)

<br/>
A captura de tela abaixo mostra uma carteira populada com alguns gastos.
Note que há dois botões em cada gasto, Editar Despesa e Excluir. O botão de editar não foi implementado completamente, mas o botão de excluir deleta corretamente a despesa e atualiza o banco:

![Screenshot carteira cheia](screenshot4.png)


## Instruções para visualização
Comando para clonar o projeto:
 - `git clone git@github.com:BrunoSayago/projeto-13-TrybeWallet.git`
 
Se necessário, instalar as dependências:
 - `npm install`
  
O projeto pode ser visualizado no navegador utilizando o comando:
- `npm start`
