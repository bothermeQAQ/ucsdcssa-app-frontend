document.addEventListener('DOMContentLoaded', (event) => {
    initializeCircles();
    setImage('homepage-image', '../assets/homepage.jpg');
});

function toHomepage() {
    window.location.href = "index.html";
}

function toProfile() {
    window.location.href = "profile.html";
}


function highlightText() {
    document.getElementById('homeButton').style.fontWeight = 'bold';
}

function setImage(elementId, imagePath) {
    const element = document.getElementById(elementId);
    if (element){
        element.style.backgroundImage = `url('${imagePath}')`;
    }
}

function getNumber(){
    const num = document.getElementById('param-input').value;
    const circles = 
    circles.forEach((circle, index) => {
        if (index < num){
            circle.style.disply = 'flex';
        } else {
            circle.style.disply = 'none';
        }
    });
}

function initializeCircles(){

}


function randomColor(){

}