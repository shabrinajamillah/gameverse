document.addEventListener('DOMContentLoaded', function() {
  const exploreButton = document.getElementById('exploreBtn');
  const targetSection = document.getElementById('featured-games');

  if (exploreButton && targetSection) {
    exploreButton.addEventListener('click', function() {
      targetSection.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  }
});