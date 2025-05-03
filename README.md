🌍 Explorador de Países
Aplicação React para explorar informações de países utilizando a REST Countries API. O projeto permite buscar, visualizar e filtrar dados de países, além de contar com testes automatizados e suporte a tema escuro/claro.

🚀 Tecnologias Utilizadas
React

Vite

Axios

React Router DOM

Jest

React Testing Library

REST Countries API

⚙️ Funcionalidades
🔍 Buscar países por nome

🌐 Filtrar por região (Europa, Ásia, África, etc.)

🧾 Exibir detalhes de cada país

🌓 Alternar entre tema claro e escuro

✅ Testes unitários com Jest e React Testing Library

☁️ Deploy com Vercel ou GitHub Pages

📁 Estrutura do Projeto


src/
├── components/
     ├──  CountryCard/
	    └── CoutryCard.module.css
	    └── index.tsx	
     ├──  Header/
	    └── Header.module.css
	    └── index.tsx
├── pages/
	├── Details/	
		└── Details.module.css
		└── index.tsx
	├── Home/
		└── Home.module.css
		└── index.tsx
├── services/
	└── api.ts
├── tests/
	└── CountryCard.test.tsx
	└── Header.test.tsx
├── App.module.css
├── App.tsx
├── main.tsx
└── index.css
🧪 Testes
Para rodar os testes unitários:



npm test
ou
yarn test
▶️ Como Rodar Localmente
Clone o repositório:

git clone <https://github.com/seu-usuario/explorador-paises-react.git>  cd explorador-paises-react

Instale as dependências:

npm install

Inicie o projeto:

npm run dev

Acesse no navegador:

<http://localhost:5173>

🌍 Publicação
Este projeto pode ser publicado de duas formas:

🔹 Vercel (recomendado)
Acesse Vercel: Build and deploy the best web experiences with the Frontend Cloud

Conecte com seu GitHub

Escolha o repositório do projeto

Siga as instruções da plataforma

🔹 GitHub Pages (via vite.config.js + gh-pages)
📄 Licença
Este projeto está licenciado sob a MIT License.

🙋‍♂️ Mentor
Projeto desenvolvido como parte de uma mentoria para prática de React com testes e integração com APIs públicas.

Mentoria realizada por Mahilson Hagnner.