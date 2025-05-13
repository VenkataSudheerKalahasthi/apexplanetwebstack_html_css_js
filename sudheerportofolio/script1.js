window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(13, 10, 10, 0.9)';
  } else {
    navbar.style.backgroundColor = 'rgb(13, 10, 10)';
  }
});
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
        
        const navbar = document.querySelector('.navbar ul');
        if (navbar.classList.contains('active')) {
          toggleMenu();
        }
      }
    }
  });
});

function toggleMenu() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('#nav-links');
  
  menuIcon.classList.toggle('active');
  navLinks.classList.toggle('active');
}

const spans = document.querySelectorAll('.home-info h2 span');
spans.forEach(span => {
  const text = span.getAttribute('data-text');
  span.textContent = '';
  
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';
  }, 100);
});