/*const typingresult = document.querySelector('#typewriter');
const texts = ['Web Designer.','Web Developer.','Problem Solver.'];
let textIndex = 0;
let charIndex = 0;
let typing = true;
function typeWriter(){
    let currentText = texts[textIndex].slice(0,charIndex);
    typingresult.innerHTML = currentText;
    if(typing){
        charIndex++;
        if(charIndex > texts[textIndex].length){
            typing = false;
            setTimeout(typeWriter,1000);
            return;
        }
    }
        else {
            charIndex--;
            if(charIndex === 0){
                typing = true;
                textIndex = (textIndex + 1 ) % texts.length;
            }
        }
        let speed = typing ? 120 - Math.random() * 40 : 60 - Math.random() * 20;
        setTimeout(typeWriter,speed);
}
typeWriter();*/
/* 3D BACKGROUND */
/* TYPEWRITER */
const roles = ["Frontend Developer.", "Web Designer.",'Problem Solver.'];
let roleIndex = 0, charIndex = 0, typing = true;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  if (typing) {
    if (charIndex < roles[roleIndex].length) {
      typewriter.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1540);
    }
  } else {
    if (charIndex > 0) {
      typewriter.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }
}
typeEffect();

/* SCROLL FADE-IN 
const sections = document.querySelectorAll("section");
function checkVisible() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", checkVisible);
checkVisible();*/
//scroll animations
const section = document.querySelectorAll('.animate');
const projects = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry,index)=>{
    if(entry.isIntersecting){
      setTimeout(()=>{
        entry.target.classList.add('visible');
      },index * 300);
    }else{
      entry.target.classList.remove('visible');
    }
  });
},{
  threshold:0.35
});
section.forEach((sec)=>{
  observer.observe(sec);
});