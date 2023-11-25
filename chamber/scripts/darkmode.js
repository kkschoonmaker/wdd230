document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleBtn');
  const body = document.body;

  // Toggle dark mode on button click
  toggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      toggleBtn.textContent = 'Light Mode';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      toggleBtn.textContent = 'Dark Mode';
    }
  });
});
