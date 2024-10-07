


# Portfólio Interativo 3D

Este projeto é um site de portfólio interativo desenvolvido com React, Three.js e TailwindCSS. O site inclui um visualizador de modelos 3D, um sistema de navegação intuitivo e uma interface responsiva. Foi criado para exibir habilidades e projetos de forma profissional e interativa.

## Funcionalidades

- **Exibição de Modelos 3D**: Usa o Three.js para carregar e renderizar modelos `.glb`.
- **Formulário de Contato**: Implementado com a biblioteca `emailjs` para enviar e-mails diretamente do site.
- **Animações de Texto**: Usando `typewriter-effect` para animações de texto dinâmicas.
- **Interface Responsiva**: Layout construído com TailwindCSS para adaptar a todos os tamanhos de tela.
- **Ícones e Componentes Visuais**: Utiliza `bootstrap-icons` e `@heroicons/react` para ícones e componentes UI.
- **Sistema de Navegação**: Integrado com `react-router-dom` para navegação entre páginas de forma fluida.

## Estrutura do Projeto

### Componentes Principais

- **Header**: Cabeçalho do site, responsável pela navegação.
- **Footer**: Rodapé com links e informações de contato.
- **Modelo**: Visualizador 3D que carrega e exibe modelos em `.glb`.
- **ContactForm**: Formulário de contato para que os visitantes possam enviar mensagens.
- **Category, Drawers, Dropdowns, FlyMenu, Quickviews**: Componentes usados para diferentes interações e visualizações no site.

### Páginas

- **Home**: Página principal com a introdução do portfólio.
- **About**: Página sobre o criador do portfólio.
- **Works**: Galeria de trabalhos e projetos.
- **Contact**: Página de contato com formulário.
- **PageNotFound**: Página exibida quando a rota não é encontrada.

### Estrutura de Arquivos

```
src/
│
├── assets/             # Arquivos de mídia e imagens
├── components/         # Componentes reutilizáveis (Header, Footer, Modelo, etc.)
├── data/               # Arquivos de contúdo das paginas
├── pages/              # Páginas principais do site (Home, About, Contact, etc.)
├── App.jsx             # Componente principal da aplicação
├── index.css           # Estilos globais
└── main.jsx            # Ponto de entrada do React
```

## Tecnologias Utilizadas

### Dependências Principais

- **React**: Biblioteca principal para construção da interface de usuário.
- **Three.js**: Para renderização e animação 3D.
- **React Router**: Gerenciamento de rotas e navegação entre páginas.
- **TailwindCSS**: Framework CSS para estilos e layout responsivo.
- **EmailJS**: Serviço de envio de e-mails integrado ao formulário de contato.
- **Typewriter Effect**: Efeito de digitação animada para textos.

### Dependências de Desenvolvimento

- **Vite**: Ferramenta de build e servidor de desenvolvimento.
- **ESLint**: Ferramenta para garantir boas práticas de código.
- **TailwindCSS e PostCSS**: Para processar e adicionar compatibilidade aos estilos CSS.

## Como Rodar Localmente

### Pré-requisitos

- Node.js instalado.

### Passos para Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/APB-Abner/CP2.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd CP2
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse `http://localhost:5173` para visualizar o site.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

