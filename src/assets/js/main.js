let slide1Right = document.querySelectorAll('.pill-selection'),
    slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
    slide1Fade = document.querySelector('.header');

    slide2Fade = document.querySelector('.card'),

    sections = document.querySelectorAll('section'),

    link = document.querySelector('.pet-selection__link'),

    card = document.querySelector('.card'),
        cardLink = card.querySelectorAll('a');

link.addEventListener('click', function () {
    itemsRightOut(slide1Right);
    itemLeftOut(slide1Left);
    fadeOut(slide1Fade);
    setTimeout(displayNone, 650, sections[0]);
    setTimeout(displayFlex, 650, sections[1]);
    fadeIn(sections[1]);
});

card.addEventListener('click', function() {
    if (!event.target('a')) return
    alert('asdfsa');
})

function displayNone(item) {
    item.style.display = 'none';
}

function displayFlex(item) {
    item.style.display = 'flex';
}

function itemsRightOut(item) {
        for (let key of item) {
            key.classList.add('transition', 'item__right-out');
        }
}


function itemLeftOut(item) {
    for (let key of item) {
        key.classList.add('transition', 'item__left-out');
    }
}

function itemBottomIn(item) {
    item.classList.add('transition', 'item__bottom-in');
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
function fadeIn(item) {
    item.classList.add('item__fade-in');
}
