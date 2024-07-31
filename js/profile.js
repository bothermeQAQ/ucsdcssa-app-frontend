document.addEventListener('DOMContentLoaded', (event) => {
    const getParam
    const param = 
    document.getElementById('param-display').textContent = `${param}`;
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