import membersList from "./members.json" assert { type: 'json' };
const header = document.querySelector("header");
const footer = document.querySelector("footer");
// const members = document.querySelector(".members");
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
    <div class="icon">
        <i class="fa-solid fa-ticket-simple"></i>
        <h3>RodeSentry</h3>
    </div>
    <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about-us.html">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
    </ul>
  </nav>`;
}

function addFooter() {
  footer.innerHTML = `<p>Developed with <i class="fa-solid fa-heart"></i> by YourFriendlyADC and All RodeSentry's Team</p>`;
}

function setMembers() {
  for (let memberType in membersList) {    
    membersListDiv = document.querySelector(`.${memberType} .members-list`);

    for (let member in membersList[memberType]) {
      
      membersListDiv.innerHTML += `
      <div class="member">
        <!-- <img src="${membersList[memberType][member]["image"]}" alt="${membersList[memberType][member]}"> -->
        <img src="images/participants/alejandro-hernandez.png" alt="${membersList[memberType][member]}">
        <h4>${member}</h4>
        <p>${membersList[memberType][member]["career"]}</p>
      </div>`;
    }
  }
}

function scrollIntoFooter() {
  const contactButton = document.querySelector("#contact");
  contactButton.addEventListener("click", function() {
      footer.scrollIntoView({
          behavior: "smooth"
      });    
  });
}