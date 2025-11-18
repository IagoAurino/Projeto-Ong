# 🐾 Patas Solidárias | Projeto Final Web

Este projeto é uma aplicação web de uma ONG dedicada ao resgate e adoção de animais, desenvolvido para demonstrar proficiência em metodologias ágeis (GitFlow), acessibilidade (WCAG 2.1 AA) e otimização para produção.

---

## 🚀 Tecnologias e Funcionalidades

### Tecnologias Utilizadas

| Categoria | Componentes |
| :--- | :--- |
| **Front-end** | HTML5, CSS3 (Variáveis CSS), JavaScript (Módulos ES6) |
| **Metodologia** | **GitFlow**, **Commits Semânticos**, Semantic Versioning (`v1.0.0`) |
| **Otimização** | Minificação (HTML, CSS, JS), Compressão de Imagens |
| **Serviço** | GitHub Pages (Simulação de Deploy) |

### Principais Funcionalidades

* **Single Page Application (SPA) Básico:** Navegação dinâmica entre páginas (Home, Cadastro, Projetos) sem recarregar o navegador, utilizando JavaScript puro (roteamento via hash).
* **Validação de Formulário JS:** Verificação de consistência de dados (CPF, Telefone, E-mail, campos obrigatórios) antes do envio, com feedback visual ao usuário.
* **Modo Escuro / Alto Contraste:** Funcionalidade de alternância de tema persistente via `localStorage`.

---

## ♿ Acessibilidade e Conformidade (WCAG 2.1 AA)

O projeto foi rigorosamente revisado para atender o Nível AA das Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1).

* **Contraste Mínimo (4.5:1):** Todas as combinações de cores de texto (incluindo o `footer` e elementos da navegação) foram ajustadas para garantir contraste seguro.
* **Navegação por Teclado:** Todos os links, botões e campos de formulário são totalmente acessíveis e navegáveis usando a tecla `Tab`. O indicador de foco (`:focus`) é visualmente claro.
* **Suporte a Leitor de Tela:** Uso correto de tags semânticas (`<header>`, `<nav>`, `<main>`), atributos `alt` descritivos em todas as imagens e implementação de `aria-label`/`aria-expanded` em componentes dinâmicos (como o menu mobile).
* **Design Inclusivo:** Implementação do sistema de **Modo Escuro** para legibilidade e versão de **Alto Contraste**.

---

## ⚙️ Controle de Versão e Estratégia Git

A gestão do repositório seguiu padrões profissionais exigidos pela Atividade 4.

### Histórico de Commits

* **Padrão:** Utilização de **Commits Semânticos** (Ex: `feat:`, `fix:`, `style:`, `chore:`) para manter um histórico limpo e legível.
* **Release:** A versão final do projeto está marcada com a tag **`v1.0.0`** (Versionamento Semântico).

### Branching (GitFlow Simplificado)

O desenvolvimento foi feito utilizando o fluxo de branches:

1.  **`main`:** Código estável, pronto para produção.
2.  **`develop`:** Branch de integração contínua das novas features.
3.  **`feature/acessibilidade-wcag`:** Branch de trabalho para a implementação da Atividade 4.
4.  **Pull Requests (PRs):** Utilizados para revisar e mesclar as branches de feature na `main`.

---

## 🚀 Como Executar o Projeto Localmente

Para visualizar o projeto e testar a acessibilidade e o SPA:

1.  **Clonar o Repositório:**
    ```bash
    git clone [Link do seu repositório GitHub]
    ```
2.  **Navegar para a Pasta:**
    ```bash
    cd [nome-do-seu-projeto]
    ```
3.  **Abrir:** Abra o arquivo `index.html` no seu navegador (use a extensão Live Server do VS Code, se disponível).

---

Ao finalizar este `README.md`, seu projeto está 100% completo e pronto para ser entregue através do **Pull Request final** no GitHub!