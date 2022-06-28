//toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//title animation
const title = document.querySelectorAll("#title1 path");

for (let i = 0; i < title.length; i++){
    console.log (`Letter ${i} is ${title[i].getTotalLength()}`);
}