const themeButtons = [...document.querySelectorAll('.header__theme-menu-button')];
const storedTheme = localStorage.getItem('theme') || 'auto';

function setTheme(theme) {
  document.documentElement.classList.remove('theme-light', 'theme-dark');
  if (theme !== 'auto') document.documentElement.classList.add(`theme-${theme}`);
  themeButtons.forEach((button) => {
    const active = button.dataset.theme === theme;
    button.classList.toggle('header__theme-menu-button_active', active);
    button.setAttribute('aria-pressed', String(active));
    button.style.pointerEvents = active ? 'none' : '';
  });
  localStorage.setItem('theme', theme);
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => setTheme(button.dataset.theme));
});

setTheme(storedTheme);
