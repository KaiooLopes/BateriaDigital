const playingClass = "playing"
const hiHat = document.querySelector(".hihat-top-cymbal")
const crashOrRide = document.querySelector(".crash-cymbal")

function playSound(e){
    const keyPress = (document.querySelector(`[data-key="${e.keyCode}"]`))
    if(!keyPress) return;
    document.querySelector(`audio[data-key="${e.keyCode}"]`).currentTime = 0
    document.querySelector(`audio[data-key="${e.keyCode}"]`).play()
    
    switch(e.keyCode){
        case 69:
        case 82:
            animarCymbal();
            break;
        case 75:
            animarHihat()
    }   
    keyPress.classList.add(playingClass);   
}
            
function animarHihat(){
    hiHat.style.transform = "translateY(1px)"
}
            
function animarCymbal(){
    crashOrRide.style.transform = "rotate(0deg)"
}

function removerAnimarHihat(e){
    if(e.propertyName !== "transform") return;
    
    hiHat.style.transform = "translateY(0px)"
}

function removerAnimarCymbal(e){
    if(e.propertyName !== "transform") return;
    
    crashOrRide.style.transform = "rotate(-7deg)"
}

function removeKeyTransition(e){
    if(e.propertyName !== 'transform') return;
    
    e.target.classList.remove(playingClass)
}

const keys_drum = Array.from(document.querySelectorAll(".key"))
keys_drum.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)
});

crashOrRide.addEventListener('transitionend', removerAnimarCymbal);
hiHat.addEventListener('transitionend', removerAnimarHihat);
document.addEventListener("keydown", playSound);

