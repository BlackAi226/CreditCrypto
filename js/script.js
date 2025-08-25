// ===============================
// Script principal Crédit Crypto
// ===============================
document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const menu = document.querySelector('nav ul.menu');
  const menuItems = menu.querySelectorAll('li a');

  // Création du bouton hamburger
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.setAttribute('aria-label', 'Menu');
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('tabindex', '0');
  hamburger.innerHTML = '&#9776;'; // ☰
  header.prepend(hamburger);

  // Toggle menu
  const toggleMenu = () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.innerHTML = menu.classList.contains('open') ? '✖' : '&#9776;';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Accessibilité clavier (entrée/ espace active le menu)
  hamburger.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Fermer menu quand on clique sur un lien
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // Fermer si clic à l’extérieur
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !header.contains(e.target)) {
      toggleMenu();
    }
  });

  // Smooth scroll pour tous les liens internes
  menuItems.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - header.offsetHeight, // ajuste selon hauteur du header
            behavior: 'smooth'
          });
        }
      });
    }
  });
});

// ===============================
// Popups manipulation inversée (optionnel)
// ===============================
/*
window.addEventListener('load', () => {
  setTimeout(() => {
    const popup = document.createElement('div');
    popup.classList.add('popup-manip');
    popup.innerHTML = `
      <p>😈 Tu penses partir ? Les vraies opportunités sont encore devant toi...</p>
      <button id="closePopup">Je reste 🔥</button>
    `;
    document.body.appendChild(popup);

    document.getElementById('closePopup').addEventListener('click', () => {
      popup.remove();
    });
  }, 15000);
});
*/
