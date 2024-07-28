function toProfile() {
    window.location.href = "profile.html";
}

function toHomepage() {
    window.location.href = "index.html";
}

function makeBold() {
    document.getElementById('homeButton').style.fontWeight = 'bold';
}

function setImage(elementId, imagePath) {
    document.getElementById(elementId).style.backgroundImage = `url('${imagePath}')`;
}

function getNumber(){
    const num = document.getElementById('inputBox').value;
}
setImage('homepage-image', '../assets/img.png');
setImage('profile-image', '../assets/img.png');