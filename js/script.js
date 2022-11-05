const navbar = document.querySelector(".navbar");

const progressLine = document.getElementById('progressLine');

window.addEventListener("scroll", navbarChange);

window.addEventListener("scroll", progress);

function navbarChange() {
    if (window.pageYOffset >= 5) {
        navbar.classList.add("navbar-js");
        navbar.style.height = 55 + 'px';
    } else {
        navbar.classList.remove("navbar-js");
        navbar.style.height = 90 + 'px';
    }
}

function progress() {
    var windowScrl = document.documentElement.scrollTop;
    var windowHg = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // console.log(windowScrl);
    // console.log(windowHg);

    var now = windowScrl / windowHg * 100;

    progressLine.style.width = Math.round(now) + '%';

}


//document.documentElement.scrollHeight


// slider


let slider = document.getElementById('slider');
let sliderElem = document.querySelectorAll('.slider-item');

let left = document.getElementById('left');
let right = document.getElementById('right');

left.addEventListener('click', () => {
    sliderElem.forEach(item => {
        var styleL = getComputedStyle(item).left;
        var data = styleL.split('px');
        item.style.left = Math.round(+data[0] - 374) + 'px';
        if (+data[0] == -748 || +data[0] < -748) {
            left.classList.add('unvisible');
        }
        console.log(styleL)
        right.classList.remove('unvisible');
    });
})

right.addEventListener('click', () => {
        sliderElem.forEach(item => {
            var styleL = getComputedStyle(item).left;
            var data = styleL.split('px');
            if (+data[0] == 0 || +data[0] > 374) {
                right.classList.add('unvisible');
            }
            item.style.left = Math.round(+data[0] + 374) + 'px';
            console.log(styleL)
            left.classList.remove('unvisible');
        });
    })
    // 7script.js:50 -1496
    // all 2594
    //one 374

// slider.addEventListener('mousedown', (event) => {
//     validation = true;
//     let clX = event.clientX;
//     slider.addEventListener('mousemove', (event) => {
//         if (event.clientX < clX) {
//             sliderElem.forEach(item => {
//                 let styleL = getComputedStyle(item).left;
//                 item.style.left = +styleL[0] - 374 + 'px';
//             });
//             slider.addEventListener('mouseup', () => {
//                 return;
//             })
//         } else {
//             sliderElem.forEach(item => {
//                 let styleL = getComputedStyle(item).left;
//                 item.style.left = +styleL[0] + 374 + 'px';
//             });
//             slider.addEventListener('mouseup', () => {
//                 return;
//             })
//         }
//     });

//     slider.addEventListener('mouseup', () => {
//         return;
//     })
// })