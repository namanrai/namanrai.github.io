//toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// //title animation
// const title = document.querySelectorAll("#title1 path");

// for (let i = 0; i < title.length; i++){
//     console.log (`Letter ${i} is ${title[i].getTotalLength()}`);
// }

// /*scroll symbol*/
// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }

//   window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal();


//background hover

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
  const {clientX, clientY} = event;

  blob.animate({
    left : `${clientX}px`,
    top : `${clientY}px`
  }, {duration: 3000, fill: "forwards"});
  

}


//Text effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervals = [];

function applyTextEffect(element) {
  let iteration = 0;
  clearInterval(intervals[element.dataset.index]);

  intervals[element.dataset.index] = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(intervals[element.dataset.index]);
    }

    iteration += 1 / 3;
  }, 30);
}

window.onload = () => {
  document.querySelectorAll(".texteffect").forEach((element, index) => {
    element.dataset.index = index;
    applyTextEffect(element);
  });
};

document.querySelectorAll(".texteffect").forEach(element => {
  element.addEventListener("mouseover", event => {
    applyTextEffect(event.target);
  });
});