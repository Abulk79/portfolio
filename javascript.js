const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

body.classList.add('light-theme');

toggleButton.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});
