let slide1Right = document.querySelectorAll('.pill-selection'),
    slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
    slide1Fade = document.querySelector('.header');

    sections = document.querySelectorAll('section'),

    link = document.querySelector('.pet-selection__link');

link.addEventListener('click', function () {
    itemRightOut(slide1Right);
    itemLeftOut(slide1Left);
    fadeOut(slide1Fade);
    setTimeout(displayNone, 750, sections[0]);
    setTimeout(displayFlex, 750, sections[1]);

});

function displayNone(item) {
    item.style.display = 'none';
}

function displayFlex(item) {
    item.style.display = 'flex';
}

function itemRightOut(item) {
    for (let key of item) {
        key.classList.add('transition', 'item__right-out');
    }
}

function itemLeftOut(item) {
    for (let key of item) {
        key.classList.add('transition', 'item__left-out');
    }
}

function itemTopOut(item) {
    item.classList.add('transition', 'item__top-out');
}

function itemBottomOut(item) {
    item.classList.add('transition', 'item__bottom-out');
}

function fadeOut(item) {
    item.classList.add('transition', 'item__fade-out');
}
