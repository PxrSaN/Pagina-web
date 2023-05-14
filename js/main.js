const images = [
'img/background 1.jpg',
'img/background 2.jpg',
'img/background 3.jpg',
'img/background 4.jpg',

]   

let index = 0;
const max = images.length;

const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

prevSlideButton.addEventListener('click', function(){
    index--;
    setImagenIndex();   
    changeBackground(images[index], containerElement);

});
    

nextSlideButton.addEventListener('click', function() {
    index++;
    setImagenIndex();
    changeBackground(images[index], containerElement);

});

function setImagenIndex(){

    if(index < 0) index = max - 1;
    if(index == max ) index = 0;

}

function changeBackground(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`

}