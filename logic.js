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