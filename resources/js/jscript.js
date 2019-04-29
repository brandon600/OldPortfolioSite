var i = 0;
var slideImages = [];
var slideLinks = [];
var slideDescs = [];
var slideTime = 5000;
var imageIndex = 0;

var slideImgElement = document.getElementById('slideImg');
var slideLinkElement =  document.getElementById('slideLink');
var slideDescElement = document.getElementById('slideDesc');



//Image List
slideImages[0] = 'resources/img/homeP4.png';
slideImages[1] = 'resources/img/homeP2.png';
slideImages[2] = 'resources/img/homeP3.png';
slideImages[3] = 'resources/img/homeP5.png';

//Link List
slideLinks[0] = 'https://google.com';
slideLinks[1] = 'https://youtube.com';
slideLinks[2] = 'https://twitter.com';
slideLinks[3] = 'https://twitter.com';

//Desc List
slideDescs[0] = 'Here is the first descripton for the first of the slide';
slideDescs[1] = 'Here is the second descripton for the second of the slide';
slideDescs[2] = 'Here is the third descripton for the third of the slide';
slideDescs[3] = 'Here is the fourth descripton for the fourth of the slide';

function fadeOut(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op -= 0.1;
    }, 75);
}

function fadeIn(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += 0.1;
    }, 90);
}

changeSlide = function() {

    slideImgElement.src = slideImages[i];
    slideLinkElement.href = slideLinks[i];
    slideDescElement.innerHTML = slideDescs[i];

    if(1 === 1) {
    fadeIn(slideImgElement);
    fadeIn(slideLinkElement);
    fadeIn(slideDescElement);
    }


    if (i < slideImages.length -1) {
        i++;
    } else {
        i = 0;
    }


    setTimeout("changeSlide()", slideTime);

    slideImgElement.style.opacity = 0;
    slideLinkElement.style.opacity = 0;
    slideDescElement.style.opacity = 0;

};




window.onload = changeSlide;

