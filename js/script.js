// ===== Menu mobile toggle =====
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('nav ul.menu');
  const menuItems = menu.querySelectorAll('li a');

  // Création d’un bouton hamburger
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '&#9776;'; // symbole menu
  document.querySelector('header').prepend(hamburger);

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  // Fermer menu quand on clique sur un lien
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      if (menu.classList.contains('open')) {
        menu.classList.remove('open');
      }
    });
  });

  // Smooth scroll pour tous les liens internes
  menuItems.forEach(link => {
    if (link.getAttribute('href').startsWith('#')) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if(target) {
          window.scrollTo({
            top: target.offsetTop - 60, // ajuster si header fixe
            behavior: 'smooth'
          });
        }
      });
    }
  });
});

// ===== Popups ou notifications incitant à revenir (optionnel) =====
/*
window.addEventListener('load', () => {
  setTimeout(() => {
    alert("Reviens vite ! De nouvelles opportunités t'attendent sur Crédit Crypto !");
  }, 15000); // 15 secondes après l'ouverture de la page
});
*/
