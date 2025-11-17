/* Template da página inicial */
export const homeTemplate = () => `
  <section class="hero-intro">
    <h1>🐾 Patas Solidárias</h1>
    <p class="intro-text">
      Acreditamos que cada vida importa. Somos uma ONG dedicada a resgatar, cuidar e encontrar lares amorosos para cães e gatos abandonados.
    </p>
  </section>

  <section class="mission-section modern-card">
    <h2>Nossa Missão</h2>
    <p>
      Garantir que cada animal tenha direito à vida, cuidado e amor, promovendo campanhas de adoção, castração e conscientização.
    </p>
    <div class="image-overlay-wrapper">
      <figure>
        <img src="assets/images/Cachorro de rua.webp" alt="Cachorro resgatado" width="600" height="400">
        <figcaption>Cada vida conta.</figcaption>
      </figure>
    </div>
  </section>

  <section class="impact-stats">
    <div class="stat-item">
      <span class="stat-number">+2</span>
      <span class="stat-label">Animais Resgatados</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">+2</span>
      <span class="stat-label">Adoções Realizadas</span>
    </div>
    <div class="stat-item">
      <span class="stat-number">1</span>
      <span class="stat-label">Voluntários Ativos</span>
    </div>
  </section>
  
  <section class="contact-section">
    <h2>Fale Conosco</h2>
    <p>Entre em contato para saber como ajudar, adotar ou se voluntariar.</p>
    <address class="contact-address-card">
      <p><strong>📞 Telefone:</strong> (99) 9999-9999</p>
      <p><strong>✉️ E-mail:</strong> contato@patassolidarias.org.br</p>
      <p><strong>📍 Endereço:</strong> Rua dos Bichos, 100 - Cidade/UF</p>
    </address>
  </section>
`;


/* Template da página Cadastre-se */
export const cadastroTemplate = () => `
  <section class="form-section">
    <h1>Cadastro de Voluntários e Apoiadores</h1>
    <p>Preencha o formulário abaixo para se juntar à nossa causa e fazer a diferença!</p>

    <div class="registration-card"> 
      <form id="cadastroForm" class="registration-form">

        <fieldset>
          <legend>Dados Pessoais</legend>
          
          <div>
            <label for="nome">Nome Completo:</label>
            <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">
            <div id="nome-error" class="error-message"></div>
          </div>

          <div>
            <label for="email">E-mail:</label>
            <input type="text" id ="email" name="email" required placeholder="seu.email@exemplo.com">
            <div id="email-error" class="error-message"></div>
          </div>

          <div>
            <label for="cpf">CPF:</label>
            <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00">
            <div id="cpf-error" class="error-message"></div>
          </div>

          <div>
            <label for="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" required placeholder="(00) 00000-0000">
            <div id="telefone-error" class="error-message"></div>
          </div>

          </fieldset>

        <fieldset>
            <legend>Endereço</legend>
            
          <div>
            <label for="cep">CEP:</label>
            <input type="text" id="cep" name="cep" required placeholder="00000-000">
            <div id="cep-error" class="error-message"></div>
          </div>

          <div>
            <label for="endereco">Endereço (Rua/Avenida, Número):</label>
            <input type="text" id="endereco" name="endereco" required>
          </div>

          <div><label for="cidade">Cidade:</label><input type="text" id="cidade" name="cidade" required></div>
          <div><label for="estado">Estado</label><select id="estado" name="estado" required></select></div>

        </fieldset>

        <div class="form-submit-row">
          <button type="submit" class="btn-action btn-finalizar">
            Finalizar Cadastro
          </button>
        </div>
      </form>
    </div>
  </section>
`;

/*Template de Exemplo para a página de Projetos Sociais.*/
export const projetosTemplate = () => `
  <section class="projetos-section">
    <h1>Projetos Sociais</h1>
    <p>Conheça nossas principais iniciativas:</p>
    <ul class="projetos-list">
      <li>Campanha de Castração Comunitária</li>
      <li>Programa de Adoção Responsável</li>
      <li>Cuidado Veterinário Emergencial</li>
    </ul>
  </section>
`;
