var photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo5.jpg", "photo6.jpg", "photo7.jpg", "photo8.jpg", "photo9.jpg"];
var position = 0;

function afficherImage() {
    document.getElementById("galerie-photo").src = photos[position];
}

function photoSuivante() {
    position = position + 1;
    if (position >= photos.length) {
        position = 0;
    }
    afficherImage();
}

function photoPrecedente() {
    position = position - 1;
    if (position < 0) {
        position = photos.length - 1;
    }
    afficherImage();
}
