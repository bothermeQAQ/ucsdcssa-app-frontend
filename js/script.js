document.addEventListener('DOMContentLoaded', (event) => {
    initializeCircles();
    setImage('homepage-image', 'assets/homepage.jpg');
});

function toHomepage() {
    window.location.href = "index.html";
}

function toProfile() {
    const activeCircle = document.querySelector('.circle.active');
    const param = activeCircle ? activeCircle.dataset.index : 0;
    window.location.href = `profile.html?param=${param}`;
}

function highlightText() {
    document.getElementById('homepageButton').style.fontWeight = 'bold';
}

function setImage(elementId, imagePath) {
    const element = document.getElementById(elementId);
    if (element){
        element.style.backgroundImage = `url('${imagePath}')`;
    }
}

function initializeCircles() {
    const buttonContainer = document.getElementById('circle-container');
    for (let i = 1; i <= 8; i++){
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = randomColor();
        circle.dataset.index = i;
        circle.onclick = () => activateCircle(i);
        buttonContainer.appendChild(circle);
    }
}

function randomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i <6 ; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getNumber(){
    const num = parseInt(document.getElementById('param-input').value);
    const circles = document.querySelectorAll('.circle');
    circles.forEach((circle, index) => {
        if (index < num){
            circle.style.display = 'flex';
        } else {
            circle.style.display = 'none';
        }
    });
}

function activateCircle(index){
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        if (parseInt(circle.dataset.index) === index){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    if (index){
        document.getElementById('param-display').textContent = `${index}`;
    }
}
