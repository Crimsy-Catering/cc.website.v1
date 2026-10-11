
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const form = document.querySelector('[data-quote-form]');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const message = document.querySelector('.form-message');
      if (message) {
        message.style.display = 'block';
        message.textContent = 'This is a front-end demo: your enquiry has not been sent. Before launch, connect this form to a form service or secure backend and test email notifications.';
        message.scrollIntoView({behavior:'smooth',block:'nearest'});
      }
    });
  }
  const packageSelect = document.querySelector('[name="package"]');
  const params = new URLSearchParams(window.location.search);
  const chosen = params.get('package');
  if (packageSelect && chosen) {
    for (const option of packageSelect.options) {
      if (option.value === chosen) packageSelect.value = chosen;
    }
  }
});
