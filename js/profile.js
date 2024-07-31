document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search); 
    const param = urlParams.get('param');
    if (param){
        document.getElementById('param-display').textContent = `${param}`;
    } else {
        document.getElementById('param-display').textContent = `参数`;
    }
    setImage('profile-image', '../assets/profile.jpg');
});

function toHomepage() {
    window.location.href = "index.html";
}

function setImage(elementId, imagePath) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.backgroundImage = `url('${imagePath}')`;
    }
}