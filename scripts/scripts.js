import membersList from "../members.json" assert { type: 'json' };
const header = document.querySelector("header");
const footer = document.querySelector("footer");
let membersListDiv;

document.addEventListener("DOMContentLoaded", function() {
  addHeader();
  addFooter();
  setMembers();
});

function addHeader() {
  header.innerHTML = `
  <input type="checkbox" id="nav_check" hidden>
  <nav class="nav-bar">
      <ul>
          <li>
              <a href="/">Inicio</a>
          </li>
          <li>
              <a href="/about-us.html">Proyecto</a>
          </li>
          <li>
              <a href="/about-us.html">Nosotros</a>
          </li>
      </ul>
  </nav>
  <label for="nav_check" class="hamburger">
    <i class="fa-solid fa-bars"></i>
  </label>`;
}

function setMembers() {
  membersListDiv = document.querySelector(".members-list");
  for (let member in membersList) {
    membersListDiv.innerHTML += `
    <div class="member">
      <img src="${membersList[member]["image"]}" alt="${membersList[member]}">
      <h4>${member}</h4>
      <p>${membersList[member]["career"]}</p>
      <p>${membersList[member]["email"]}</p>
    </div>`;
  }
}

function addFooter() {
  footer.innerHTML = `
  <p>Desarrollado con <i class="fa-solid fa-heart"></i> por YourFriendlyADC y todo el equipo de Rodesentry.</p>
  <a href="https://www.instagram.com/rodesentry/" class="ig-link" target="_blank"><i class="fa-brands fa-instagram"></i></a>
  <!--<a href="https://www.instagram.com/rodesentry/" class="ig-link"><i class="fa-solid fa-file"></i></a>-->`;
}

// Home Animation  
ScrollReveal().reveal(".landing-page-title",
{ delay: 400,
duration: 800,
distance: '5rem',
origin: "top" });

ScrollReveal().reveal(".landing-page-logo",
{ delay: 400,
    duration: 800,
    distance: '5rem',
  origin: "bottom" });

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile Nav
function toggleMenu() {
  var menuToggle = document.querySelector('.menuToggle');
  var nav = document.querySelector('.nav');
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
}