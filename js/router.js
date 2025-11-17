// assets/js/router.js (ATUALIZADO)

// Importa os templates
import { homeTemplate, cadastroTemplate, projetosTemplate } from './templates.js';
// Importa a função de validação (para o próximo passo)
import { attachFormValidation } from './formValidator.js'; 

const routes = {
  '#home': homeTemplate,
  '': homeTemplate, // Rota padrão
  '#projetos': projetosTemplate,
  '#cadastro': cadastroTemplate, // Adicionado o novo template
  // Você pode adicionar mais rotas aqui (#doacao, #nossa-ong)
};

const appContent = document.getElementById('app-content'); 

const renderContent = () => {
  const hash = window.location.hash || '';
  const templateFunction = routes[hash];

  if (appContent && templateFunction) {
    appContent.innerHTML = templateFunction();
    
    // ANEXAR VALIDAÇÃO: Se a rota for #cadastro, anexa a validação.
    if (hash === '#cadastro') {
      attachFormValidation('cadastroForm'); // ID do formulário no template
    }
  
  } else if (appContent) {
    appContent.innerHTML = '<h2>Página Não Encontrada (Erro 404)!</h2>';
  }
};

export const initRouter = () => {
  window.addEventListener('hashchange', renderContent);
  renderContent();
};