// Função para alternar o tema claro e escuro
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.createElement('button');
    themeToggle.textContent = 'Trocar Tema';
    document.body.prepend(themeToggle);
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
    });
  });
  