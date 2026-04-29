(function () {
  // Apply saved theme immediately to avoid flash
  var saved = localStorage.getItem('svs-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('svs-theme', theme);
    var btn = document.getElementById('themeToggle');
    if (btn) {
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀' : '☾';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;
    // Set correct icon on load
    var current = localStorage.getItem('svs-theme') || 'dark';
    btn.querySelector('.theme-icon').textContent = current === 'dark' ? '☀' : '☾';
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

    btn.addEventListener('click', function () {
      var now = document.documentElement.getAttribute('data-theme');
      setTheme(now === 'dark' ? 'light' : 'dark');
    });
  });
})();
