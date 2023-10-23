import membersList from "./members.json" assert { type: 'json' };
const header = document.querySelector("header");
const footer = document.querySelector("footer");
let membersListDiv;

document.addEventListener("DOMContentLoaded", function() {
  addHeader();
  addFooter();
  setMembers();
  scrollIntoFooter();
});

function addHeader() {
  header.innerHTML = `
  <nav>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/project.html">Proyecto</a></li>
        <li><a href="/about-us.html">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>`;
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
  <p>Developed with <i class="fa-solid fa-heart"></i> by YourFriendlyADC and All Rodesentry's Team</p>
  <a href="https://www.instagram.com/rodesentry/" class="ig-link"><i class="fa-brands fa-instagram"></i></a>
  <!--<a href="https://www.instagram.com/rodesentry/" class="ig-link"><i class="fa-solid fa-file"></i></a>-->`;
}

function scrollIntoFooter() {
  const contactButton = document.querySelector("#contact");
  contactButton.addEventListener("click", function() {
      footer.scrollIntoView({
          behavior: "smooth"
      });    
  });
}