'use script'

document.addEventListener("DOMContentLoaded", function (event) {

    let main = document.querySelector('main'),
        html = document.querySelector('html'),
        body = document.querySelector('body'),
        sections = document.querySelectorAll('section'),
        sectionSelectCat = document.querySelector('#select-weight-cat'),
        plusClose = document.querySelectorAll('.plus-close-pos'),
        specialPlus = document.querySelectorAll('.special__plus'),

        slide1Right = document.querySelectorAll('.pill-selection'),
        slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
        slide1Fade = document.querySelector('.header'),
        selectAnimal = document.querySelectorAll('.pet-selection__link'), //КНОПКИ НА ПЕРВОМ СЛАЙДЕ


        selectWeightAnimal = document.querySelectorAll('.card'),


        selectTablet = document.querySelector('.arsenal__img-2'),
        selectTabletLink = document.querySelectorAll('.arsenal__plus'),

    footer = document.querySelector('footer');


    const arrImgPackDog = ['img/dog-pack-1-min.png', 'img/dog-pack-2-min.png', 'img/dog-pack-3-min.png'],
        arrImgPackCat = ['img/cat-pack-1-min.png', 'img/cat-pack-2-min.png'];




    /* ПЕРВЫЙ СЛАЙД */
    selectAnimal[0].addEventListener('click', () => selectAnimals(sections[1]));
    selectAnimal[1].addEventListener('click', () => selectAnimals(sectionSelectCat));

    function selectAnimals(item) {
        itemsRightOut(slide1Right);
        itemLeftOut(slide1Left);
        fadeOut(slide1Fade);
        setTimeout(displayNone, 590, sections[0]);
        setTimeout(displayFlex, 590, item);
        fadeIn(item);
    };

    /* ВТОРОЙ СЛАЙД */
    selectWeightAnimal[0].addEventListener('click', () => {
        setTimeout(addAnimationPlusShakeWarning, 1190, selectTabletLink[0]);
        addAnimationPlusShakeWarning(selectTabletLink[1]);

        fadeOut(sections[1]);
        setTimeout(displayNone, 590, sections[1]);
        setTimeout(displayFlex, 590, sections[2]);
        itemBottomIn(selectTablet);
        fadeIn(sections[2]);
    });
    selectWeightAnimal[1].addEventListener('click', () => {
        setTimeout(addAnimationPlusShakeWarning, 1190, selectTabletLink[0]);
        addAnimationPlusShakeWarning(selectTabletLink[1]);

        fadeOut(sections[12]);
        setTimeout(displayNone, 590, sections[12]);
        setTimeout(displayFlex, 590, sections[2]);
        fadeIn(sections[2]);

    });
    /* ТРЕТИЙ СЛАЙД */
    selectTabletLink[0].addEventListener('click', selectCestodOrNematod.bind(sections[4], sections[5]));

    selectTabletLink[1].addEventListener('click', selectCestodOrNematod.bind(sections[5], sections[4]));

    function selectCestodOrNematod(itemStart, itemEnd) {
        let trigger = 0;
        fadeOut(sections[2]);
        setTimeout(displayNone, 590, sections[2]);
        setTimeout(displayFlex, 590, sections[3]);
        fadeIn(sections[3]);
        /* ЧЕТВЁРТЫЙ СЛАЙД */
        /*setTimeout(fadeOut, 1590, sections[3]);
        setTimeout(displayNone, 2590, sections[3]);
        setTimeout(displayFlex, 2590, itemStart);
        setTimeout(fadeIn, 2590, itemStart);
        /* ПЯТЫЙ СЛАЙД */
        plusClose[0].addEventListener('click', () => CestodOrNematod(sections[4], sections[5]));
        plusClose[1].addEventListener('click', () => CestodOrNematod(sections[5], sections[4]));

        function CestodOrNematod(itemStart, itemEnd) {
            if (trigger >= 1) {
                /* ШЕСТОЙ СЛАЙД */
                fadeOut(sections[4]);
                fadeOut(sections[5]);
                setTimeout(displayNone, 590, sections[4]);
                setTimeout(displayNone, 590, sections[5]);
                setTimeout(displayFlex, 590, sections[6]);
                fadeIn(sections[6]);
            } else {
                fadeOut(itemStart);
                setTimeout(displayNone, 590, itemStart);
                setTimeout(displayFlex, 590, itemEnd);
                fadeIn(itemEnd);
                trigger++;
            }
        };
    };

    /* СЕДЬМОЙ СЛАЙД ОТКРЫТЬ*/
    specialPlus[0].addEventListener('click', () => specialPlusOpen(sections[7]));
    specialPlus[1].addEventListener('click', () => specialPlusOpen(sections[8]));
    specialPlus[2].addEventListener('click', () => specialPlusOpen(sections[9]));
    specialPlus[3].addEventListener('click', () => specialPlusOpen(sections[10]));
    specialPlus[4].addEventListener('click', () => specialPlusOpen(sections[11]));

    /* СЕДЬМОЙ СЛАЙД ЗАКРЫТЬ*/
    let triggerPlusClose = 0;

    plusClose[2].addEventListener('click', () => specialPlusClose(sections[7]));
    plusClose[3].addEventListener('click', () => specialPlusClose(sections[8]));
    plusClose[4].addEventListener('click', () => specialPlusClose(sections[9]));
    plusClose[5].addEventListener('click', () => specialPlusClose(sections[10]));
    plusClose[6].addEventListener('click', () => specialPlusClose(sections[11]));


    function specialPlusOpen(item) {
        fadeOut(sections[6]);
        setTimeout(displayNone, 590, sections[6]);
        setTimeout(displayFlex, 590, item);
        fadeIn(item);
    }

    function specialPlusClose(item) {
        if (triggerPlusClose <= 3) {
            fadeOut(item);
            setTimeout(displayNone, 590, item);
            setTimeout(displayFlex, 590, sections[6]);
            fadeIn(sections[6]);
            triggerPlusClose++;
            console.log(triggerPlusClose);
        } else {
            fadeOut(main);
            setTimeout(displayNone, 590, main);
            setTimeout(displayNone, 590, item);
            body.style.overflowY = 'scroll';
            setTimeout(displayFlex, 590, sections[13]);
            setTimeout(displayFlex, 590, sections[14]);
            setTimeout(displayFlex, 590, footer);
            fadeIn(sections[13]);
            fadeIn(sections[14]);
            fadeIn(footer);
        }
    }



    /* АНИМАЦИИ */
    function addAnimationPlusShakeWarning(item) {
        item.classList.add('plus-animation-shake-warning');
    }
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

    function itemBottomIn(item) {
        item.classList.add('item__bottom-in');
    }

    function fadeOut(item) {
        item.classList.add('item__fade-out');
    }

    function fadeIn(item) {
        item.classList.add('item__fade-in');
    }
});