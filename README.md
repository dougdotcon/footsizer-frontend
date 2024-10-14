
---

# Footsizer Frontend

O **Footsizer Frontend** é a interface do usuário para uma aplicação de recomendação de tamanhos de sapato, que visa ajudar clientes de e-commerce a encontrar o tamanho ideal de calçado. Este projeto foi construído com Angular e inclui várias funcionalidades, como um carrossel de produtos relacionados, avaliações de clientes, um calculador de frete e muito mais.

## Índice

- [Recursos](#recursos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Licença](#licença)

## Recursos

- **Carrossel de Produtos Relacionados**: Exibe uma lista de produtos relacionados ao item atual.
- **Calculadora de Frete**: Permite calcular o frete com base no CEP do usuário.
- **Avaliações de Clientes**: Visualize avaliações e comentários de clientes sobre os produtos.
- **Sistema de Upload**: Permite ao usuário enviar fotos de seus pés para receber uma recomendação de tamanho ideal.

## Instalação

### Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (versão recomendada: 14.x ou 16.x)
- [Angular CLI](https://angular.io/cli)

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/dougdotcon/footsizer-frontend.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd footsizer-frontend
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

### Executar o Servidor de Desenvolvimento

Para rodar o projeto localmente em modo de desenvolvimento:

```bash
ng serve
```

Acesse o projeto em seu navegador no endereço: `http://localhost:4200`.

### Build

Para gerar a versão de produção otimizada do projeto:

```bash
ng build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## Estrutura de Pastas

Abaixo está um resumo da estrutura de diretórios do projeto:

```bash
.
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── carousel
│   │   │   ├── contact
│   │   │   ├── footer
│   │   │   ├── header
│   │   │   ├── product-info
│   │   │   ├── product-reviews
│   │   │   ├── related-products-carousel
│   │   │   └── shipping-calculator
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── assets
│   ├── environments
│   ├── index.html
│   ├── styles.css
├── angular.json
├── package.json
└── README.md
```

## Tecnologias Utilizadas

Este projeto foi desenvolvido usando as seguintes tecnologias:

- **Angular**: Framework principal utilizado para a construção do frontend.
- **Bootstrap**: Utilizado para a estilização e componentes responsivos.
- **TypeScript**: Linguagem de programação usada no desenvolvimento da aplicação Angular.
- **HTML/CSS**: Estrutura e estilo da interface do usuário.
- **PostCSS**: Usado para processamento de estilos CSS.
- **Node.js**: Plataforma usada para gerenciar pacotes e executar scripts do projeto.

## Scripts Disponíveis

Aqui estão os comandos que podem ser executados no projeto:

### `ng serve`

Executa o servidor de desenvolvimento. O projeto estará disponível em `http://localhost:4200/`.

### `ng build`

Compila o projeto para produção na pasta `dist/`.

### `ng test`

Executa os testes unitários configurados para o projeto.

### `ng lint`

Executa o linting para checar a qualidade do código.

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
