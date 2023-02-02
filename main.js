const images = document.querySelectorAll('.display-img');
let sliderImgs = Array.from(images);

const leftArrow = document.querySelector('.left')
const rightArrow = document.querySelector('.right')

const dots = document.querySelectorAll('.nav-dot');
let navDots = Array.from(dots);

const startBtn = document.querySelector(".start-slides")
const stopBtn = document.querySelector(".stop-slides")


leftArrow.addEventListener('click', previousImage);
rightArrow.addEventListener('click', nextImage);

let automate = setInterval(nextImage, 5000);
startBtn.addEventListener('click', () => {automate = setInterval(nextImage, 5000);});
stopBtn.addEventListener('click', () => {clearTimeout(automate)});

function previousImage() {
    let pos = sliderImgs.length;

    for (let i = sliderImgs.length - 1; i >= 0; i--) {        
        if (sliderImgs[i].classList.contains('current')) {
            sliderImgs[i].classList.toggle('current');
            navDots[i].classList.toggle('filled');
            pos = i-1;

            if (pos === -1) {
                pos = sliderImgs.length - 1;
            }
            break;
        }
    }

    sliderImgs[pos].classList.toggle('current');
    navDots[pos].classList.toggle('filled');
}

function nextImage() {
    let pos = -1;

    for (let i = 0; i < sliderImgs.length; i++) {        
        if (sliderImgs[i].classList.contains('current')) {
            sliderImgs[i].classList.toggle('current');
            navDots[i].classList.toggle('filled');
            pos = i+1;

            if (pos === sliderImgs.length) {
                pos = 0;
            }
            break;
        }
    }

    sliderImgs[pos].classList.toggle('current');
    navDots[pos].classList.toggle('filled');
}

