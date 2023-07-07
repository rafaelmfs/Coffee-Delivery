# Coffee Delivery

![Capa](https://user-images.githubusercontent.com/80429145/188321299-894ea60e-a48b-4cd9-b668-0921f6ae20dc.png)


### Projeto de estudo de ReactJS

#### Feito com

- [HTML5-markup](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [StyledComponent](https://styled-components.com/docs)
- [React-Hook-Form](https://react-hook-form.com/)
- [React-Router-Dom](https://reactrouter.com/en/v6.3.0/getting-started/overview)
- [Zod](https://zod.dev/)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/)

### O projeto

Foi o segundo desafio prático do curso, desenvolver uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:

- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

Gostei muito desse desafio e confesso que não foi fácil mas me esforcei bastante e cheguei no melhor resultado ao meu alcance. Com esse desafio utilizei o contextAPI para salvar as informações do carrinho, com os hooks useContext e useReducer ficou mais fácil gerenciar as funções de adicionar, remover, incrementar e decrementar os items do carrinho e também esvaziar o carrinho depois que o usuário confirmar o pedido. No formulário para preencher o endereço eu tentei colocar de uma forma quando o usuário preencher o CEP depois que sair do input ele preencha o resto do endereço automaticamente e também utilizei o Zod resolver com o react-hook-form para a validação dos campos. Algo que gostaria de ter feito era deixar o nome da cidade do usuário no cabeçalho ao lado do carrinho mas nesse caso eu só consegui pegar latitude e longitude pelo navegador e vi que para converter seria necessário utilizar a api do google e precisa de autenticação para utilizar, como é um projeto para estudos preferi não fazer isso por enquanto e deixei estático mesmo. 
Como disse, aprendi bastante com esse desafio e vou continuar me aprofundando nos estudos de front-end com reactJS e typescript. 

Para abrir e rodar o projeto, primeiro baixe os arquivos desse repositório, abra a pasta no terminal e execute `npm install` para instalar as dependências e depois `npm run dev` para iniciar o projeto.

![Captura de tela de 2022-09-04 12-30-00](https://user-images.githubusercontent.com/80429145/188321376-d5069043-080e-44a4-af49-f1e8d418f819.png)

![Captura de tela de 2022-09-04 12-30-15](https://user-images.githubusercontent.com/80429145/188321379-a0f190f7-d6cf-4f8b-a4ee-d97448ce4e6d.png)

![Captura de tela de 2022-09-04 12-30-38](https://user-images.githubusercontent.com/80429145/188321382-e7626cc4-81b3-4588-8f6a-1ec5338f37bf.png)


