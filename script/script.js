document.addEventListener('DOMContentLoaded', (event) => {
    initializeCircles();
    setImage('homepage-image', '../image/homepage.jpg');
});

function toHomepage() {
    api.openFrame({
        name: 'main',
        url: 'main.html',
        bounces: true,
        rect: { // 推荐使用Margin布局，用于适配屏幕的动态变化
            marginTop: headerH, // main页面距离win顶部的高度
            marginBottom: footerH, // main页面距离win底部的高度
            w: 'auto' // main页面的宽度 自适应屏幕宽度
        }
    });
}

function toLogin() {
    api.openWin({
        name: 'Login',
        url: 'Login.html',
    });
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
