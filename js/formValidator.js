// --- Funções de Formato (Consistência de Dados) ---

const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return re.test(String(email).toLowerCase());
};

const isValidCPF = (cpf) => {
  // Regex para formato 000.000.000-00
  const re = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  return re.test(cpf);
};

const isValidTelefone = (tel) => {
  // Regex para formato (00) 00000-0000 ou (00) 0000-0000
  const re = /^\(\d{2}\) \d{4,5}-\d{4}$/; 
  return re.test(tel);
};

const isValidCEP = (cep) => {
  // Regex para formato 00000-000
  const re = /^\d{5}-\d{3}$/;
  return re.test(cep);
};

// --- Funções de UI (Display de Erros) ---

const displayError = (element, message) => {
  const errorDiv = document.getElementById(`${element.id}-error`);
  if (errorDiv) {
    errorDiv.textContent = message;
    element.classList.add('input-error'); 
  }
};

const clearError = (element) => {
  const errorDiv = document.getElementById(`${element.id}-error`);
  if (errorDiv) {
    errorDiv.textContent = '';
    element.classList.remove('input-error');
  }
};

// --- Função Principal de Validação ---

const validateForm = (event) => {
  event.preventDefault(); 
  let isValid = true;
  const form = event.target;

  // Obtenção dos Inputs
  const nomeInput = form.querySelector('#nome');
  const emailInput = form.querySelector('#email');
  const cpfInput = form.querySelector('#cpf');
  const telefoneInput = form.querySelector('#telefone');
  const cepInput = form.querySelector('#cep');

  // 1. Nome (Mínimo 5 caracteres)
  clearError(nomeInput);
  if (nomeInput.value.trim().length < 5) {
    displayError(nomeInput, 'O nome deve ter pelo menos 5 caracteres.');
    isValid = false;
  }

  // 2. E-mail (Formato)
  clearError(emailInput);
  if (!isValidEmail(emailInput.value)) {
    displayError(emailInput, 'E-mail inválido ou mal formatado.');
    isValid = false;
  }
  
  // 3. CPF (Formato e Consistência)
  clearError(cpfInput);
  if (!isValidCPF(cpfInput.value)) {
    displayError(cpfInput, 'CPF inválido. Use o formato 000.000.000-00.');
    isValid = false;
  }

  // 4. Telefone (Formato)
  clearError(telefoneInput);
  if (!isValidTelefone(telefoneInput.value)) {
    displayError(telefoneInput, 'Telefone inválido. Use o formato (XX) XXXXX-XXXX.');
    isValid = false;
  }

  // 5. CEP (Formato)
  clearError(cepInput);
  if (!isValidCEP(cepInput.value)) {
    displayError(cepInput, 'CEP inválido. Use o formato 00000-000.');
    isValid = false;
  }
  
  // Se tudo estiver válido, o formulário é 'enviado'
  if (isValid) {
    alert('✅ Formulário validado! A Entrega 3 está concluída.');
    form.reset(); 
  }
};

/**
 * Anexa a validação ao formulário (chamada pelo router.js).
 */
export const attachFormValidation = (formId) => {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener('submit', validateForm);
  }
};

