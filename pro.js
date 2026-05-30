/* Typing Effect */

const roles = [
    "Computer Science Student",
    "UI/UX Enthusiast",
    "MERN Stack Learner",
    "Future Software Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText =
document.getElementById("typing");

function type() {

    if(charIndex < roles[roleIndex].length){

        typingText.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type,80);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(erase,40);

    }else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(type,300);
    }

}

type();

/* Scroll Reveal */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const elements =
document.querySelectorAll(
"section, .skill-card, .timeline-card, .about-card"
);

elements.forEach((el)=>{
el.classList.add("hidden");
observer.observe(el);
});