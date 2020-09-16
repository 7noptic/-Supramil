document.addEventListener("DOMContentLoaded", function (event) {

    let slide1Right = document.querySelectorAll('.pill-selection'),
        slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
        slide1Fade = document.querySelector('.header'),

        slide2Fade = document.querySelector('.card'),

        sections = document.querySelectorAll('section'),

        selectAnimal = document.querySelectorAll('.pet-selection__link'),


        sectionSelectCat = document.querySelector('#select-weight-cat'),

        card = document.querySelector('.card'),
        cardLink = card.querySelector('.row');

    const arrImgPackDog = ['img/dog-pack-1.png', 'img/dog-pack-2.png', 'img/dog-pack-3.png'],
        arrImgPackCat = ['img/cat-pack-1.png', 'img/cat-pack-2.png'];


    /* ПЕРВЫЙ СЛАЙД */
    selectAnimal[0].addEventListener('click', function () {
        itemsRightOut(slide1Right);
        itemLeftOut(slide1Left);
        fadeOut(slide1Fade);
        setTimeout(displayNone, 650, sections[0]);
        setTimeout(displayFlex, 650, sections[1]);
        fadeIn(sections[1]);
    });
    selectAnimal[1].addEventListener('click', () => {
        itemsRightOut(slide1Right);
        itemLeftOut(slide1Left);
        fadeOut(slide1Fade);
        setTimeout(displayNone, 650, sections[0]);
        setTimeout(displayFlex, 650, sectionSelectCat);
        fadeIn(sectionSelectCat);
    });

    /* ВТОРОЙ СЛАЙД */
    card.addEventListener('click', (event) => {
        if (event.target.matches('a')) {
            console.log('check');
        }
    });


    /* АНИМАЦИИ */
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
});