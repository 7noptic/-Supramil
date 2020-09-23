"use strict";

document.addEventListener("DOMContentLoaded", function (event) {

    let body = document.querySelector('body'),
        sections = document.querySelectorAll('section'),
        sectionSelectCat = document.querySelector('#select-weight-cat'),
        plusClose = document.querySelectorAll('.plus-close-pos'),
        specialPlus = document.querySelectorAll('.special__plus'),
        triggerCat = 0,

        slide1Right = document.querySelectorAll('.pill-selection'),
        slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
        slide1Fade = document.querySelector('.header'),
        selectAnimal = document.querySelectorAll('.pet-selection__link'),


        btnSelectWeightAnimal = document.querySelectorAll('.card__item'),


        selectTabletLink = document.querySelectorAll('.arsenal__plus'),

        footer = document.querySelector('footer');


    const arrImgPack = ['img/special-dog-pack-1-min.png', 'img/special-dog-pack-2-min.png', 'img/special-dog-pack-3-min.png', 'img/special-cat-pack-1-min.png', 'img/special-cat-pack-2-min.png'],
        arrImgTabletPack = ['img/dog-tablet-1-min.png', 'img/dog-tablet-2-min.png', 'img/dog-tablet-3-min.png', 'img/cat-tablet-1-min.png', 'img/cat-tablet-2-min.png'],
        arrImgTablet = ['img/tablet-dog-1-min.png', 'img/tablet-min.png', 'img/tablet-dog-2-min.png', 'img/tablet-cat-1-min.png', 'img/tablet-cat-2-min.png'],
        arrImgAnimalDog = ['img/tabletdropbg-min.png', 'img/resultbg-min.png', 'img/securitybg-min.png', 'img/tastebg-min.png'],
        arrImgAnimalCat = ['img/tabletdropbg-cat-min.png', 'img/resultbg-cat-min.png', 'img/securitybg-cat-min.png', 'img/tastebg-cat-min.png'],

        arrTextTitle = ['для щенков и собак массой до 5 кг', 'для щенков и собак массой до 20 кг', 'для собак массой от 20 до 50 кг', 'для собак массой от 20 до 50 кг', 'для кошек массой от 2 кг'],

        arrReplacePack = ['replace-pack-1', 'replace-pack-3'], //2 css
        arrReplaceTabletPack = ['replace-tablet-pack-1'],
        arrReplaceTablet = ['replace-tablet-1', 'replace-tablet-2', 'replace-tablet-3', 'replace-tablet-4'],
        arrReplaceAnimal = ['replace-animal-1', 'replace-animal-2', 'replace-animal-3'];


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
    }

    /* ВТОРОЙ СЛАЙД */
    btnSelectWeightAnimal[0].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[0], arrImgTabletPack[0], arrImgTablet[0], arrImgAnimalDog, arrTextTitle[0]));
    btnSelectWeightAnimal[1].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[1], arrImgTabletPack[1], arrImgTablet[1], arrImgAnimalDog, arrTextTitle[1]));
    btnSelectWeightAnimal[2].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[2], arrImgTabletPack[2], arrImgTablet[2], arrImgAnimalDog, arrTextTitle[2]));

    btnSelectWeightAnimal[3].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[0], arrImgTabletPack[0], arrImgTablet[0], arrImgAnimalDog, arrTextTitle[0]));
    btnSelectWeightAnimal[4].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[1], arrImgTabletPack[1], arrImgTablet[1], arrImgAnimalDog, arrTextTitle[1]));
    btnSelectWeightAnimal[5].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[2], arrImgTabletPack[2], arrImgTablet[2], arrImgAnimalDog, arrTextTitle[2]));

    btnSelectWeightAnimal[6].addEventListener('click', () => {
        selectWeightAnimals(sections[12], arrImgPack[3], arrImgTabletPack[3], arrImgTablet[3], arrImgAnimalCat, arrTextTitle[3]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[7].addEventListener('click', () => {
        selectWeightAnimals(sections[12], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[4]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[8].addEventListener('click', () => {
        selectWeightAnimals(sections[12], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[3]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[9].addEventListener('click', () => {
        selectWeightAnimals(sections[12], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[4]);
        selectWeightCat();
    });

    function selectWeightAnimals(item, pack, tabletpack, tablet, animal, text) {
        arrReplacePack.forEach(function (item, i, arrReplacePack) {
            document.getElementById(arrReplacePack[i]).src = pack;
        });
        document.getElementById('replace-pack-2').style.backgroundImage = `url('${pack}')`;
        arrReplaceTabletPack.forEach(function (item, i, arrReplaceTabletPack) {
            document.getElementById(arrReplaceTabletPack[i]).src = tabletpack;
        });
        arrReplaceTablet.forEach(function (item, i, arrReplaceTablet) {
            document.getElementById(arrReplaceTablet[i]).src = tablet;
        });
        arrReplaceAnimal.forEach(function (item, i, arrReplaceAnimal) {
            document.getElementById(arrReplaceAnimal[i]).src = animal[i];
        });
        document.getElementById('replace-animal-4').style.backgroundImage = `url('${animal[3]}')`;
        replaceText(text);


        setTimeout(addAnimationPlusShakeWarning, 1190, selectTabletLink[0]);
        addAnimationPlusShakeWarning(selectTabletLink[1]);

        fadeOut(item);
        setTimeout(displayNone, 590, item);
        setTimeout(displayFlex, 590, sections[2]);
        setTimeout(animationUpPack, 590);
        fadeIn(sections[2]);
        body.style.overflowY = 'scroll';
        setTimeout(displayFlex, 590, sections[13]);
        setTimeout(displayFlex, 590, sections[14]);
        setTimeout(displayFlex, 590, footer);
        fadeIn(sections[13]);
        fadeIn(sections[14]);
        fadeIn(footer);
    }

    function selectWeightCat() {
        triggerCat++;
        document.getElementById('replace-animal-2').classList.remove('result__img');
        document.getElementById('replace-animal-4').classList.toggle('taste__bg');
        document.getElementById('replace-animal-4').classList.toggle('taste__bg-cat');
        document.getElementById('replace-tablet-4').classList.toggle('taste__tablet');
        document.getElementById('replace-tablet-4').classList.toggle('taste__tablet-cat');
    }

    function replaceText(item) {
        document.getElementById('replace_text').textContent = item;
    }

    /* ТРЕТИЙ СЛАЙД */
    selectTabletLink[0].addEventListener('click', () => {
        setTimeout(plusDisabled, 590, selectTabletLink[0]);

        selectCestodOrNematod(sections[4], sections[5]);
        setTimeout(animationCestod, 2200);
    });

    selectTabletLink[1].addEventListener('click', () => {
        setTimeout(plusDisabled, 590, selectTabletLink[1]);

        selectCestodOrNematod(sections[5], sections[4]);
        setTimeout(animationNematod, 2200);
    });
    let triggerCestodOrNematod = 0;

    function selectCestodOrNematod(itemStart) {
        fadeOut(sections[2]);
        setTimeout(displayNone, 590, sections[2]);
        setTimeout(displayFlex, 590, sections[3]);
        fadeIn(sections[3]);
        /* ЧЕТВЁРТЫЙ СЛАЙД */
        if (triggerCat > 0) {
            setTimeout(animationDropTabletCat, 590);
        } else {
            setTimeout(animationDropTabletDog, 590);
        }
        setTimeout(fadeOut, 1700, sections[3]);
        setTimeout(displayNone, 2200, sections[3]);
        setTimeout(displayFlex, 2200, itemStart);
        setTimeout(fadeIn, 2200, itemStart);


        /* ПЯТЫЙ СЛАЙД */
        plusClose[0].addEventListener('click', () => CestodOrNematod(sections[4]));
        plusClose[1].addEventListener('click', () => CestodOrNematod(sections[5]));


        function CestodOrNematod(itemStart) {

            if (triggerCestodOrNematod >= 1) {
                /* ШЕСТОЙ СЛАЙД */
                fadeOut(itemStart);
                setTimeout(displayNone, 590, itemStart);
                setTimeout(displayFlex, 590, sections[6]);
                fadeIn(sections[6]);
            } else {
                fadeOut(itemStart);
                setTimeout(displayNone, 590, itemStart);
                setTimeout(displayFlex, 590, sections[2]);
                fadeIn(sections[2]);
                triggerCestodOrNematod++;
            }
        }


    }
    /* СЕДЬМОЙ СЛАЙД ОТКРЫТЬ*/
    specialPlus[0].addEventListener('click', () => specialPlusOpen(sections[7], specialPlus[0]));
    specialPlus[1].addEventListener('click', () => specialPlusOpen(sections[8], specialPlus[1]));
    specialPlus[2].addEventListener('click', () => specialPlusOpen(sections[11], specialPlus[2]));
    specialPlus[3].addEventListener('click', () => specialPlusOpen(sections[9], specialPlus[3]));
    specialPlus[4].addEventListener('click', () => specialPlusOpen(sections[10], specialPlus[4]));

    /* СЕДЬМОЙ СЛАЙД ЗАКРЫТЬ*/
    let triggerPlusClose = 0;

    plusClose[2].addEventListener('click', () => specialPlusClose(sections[7]));
    plusClose[3].addEventListener('click', () => specialPlusClose(sections[8]));
    plusClose[4].addEventListener('click', () => specialPlusClose(sections[9]));
    plusClose[5].addEventListener('click', () => specialPlusClose(sections[10]));
    plusClose[6].addEventListener('click', () => specialPlusClose(sections[11]));


    function specialPlusOpen(item, itemPlus) {
        setTimeout(plusDisabled, 590, itemPlus);
        fadeOut(sections[6]);
        setTimeout(displayNone, 590, sections[6]);
        setTimeout(displayFlex, 590, item);
        fadeIn(item);
    }

    function specialPlusClose(item) {
        /*   if (triggerPlusClose <= 3) {*/
        fadeOut(item);
        setTimeout(displayNone, 590, item);
        setTimeout(displayFlex, 590, sections[6]);
        fadeIn(sections[6]);
        triggerPlusClose++;
        console.log(triggerPlusClose);
        /* } else {
             fadeOut(main);
             setTimeout(displayNone, 590, main);
             setTimeout(displayNone, 590, item);

         }*/
    }

    function plusDisabled(item) {
        item.classList.add('plus__disabled');
    }

    /* АНИМАЦИИ */
    function animationNematod() {
        const element = document.querySelector('.nematod__atack');
        let height = 100,
            top = 20;
        const id = setInterval(frame, 20);

        function frame() {
            if (height < 32) {
                clearInterval(id);
                let nematodItem = document.querySelectorAll('.nematod__item'),
                    i = 1;
                for (let item of nematodItem) {
                    item.classList.add(`item__shake-hard-${i}`);
                    i++;
                }
            } else {
                height = height - 0.9;
                top = top + 0.5;
                element.style.height = height + '%';
                element.style.top = top + '%';
            }
        }
    }

    function animationCestod() {
        const element = document.querySelector('.cestod__atack');
        let width = 100,
            left = 0;
        const id = setInterval(frame, 20);

        function frame() {
            if (width < 20) {
                clearInterval(id);
                let cestodItem = document.querySelectorAll('.cestod__item'),
                    i = 1;
                for (let item of cestodItem) {
                    item.classList.add(`item__shake-hard-${i}`);
                    i++;
                }
            } else {
                width = width - 0.9;
                left = left + 0.35;
                element.style.width = width + '%';
                element.style.left = left + '%';
            }
        }
    }

    function animationUpPack() {
        const pack = document.getElementById('replace-pack-1'),
            tabletPack = document.getElementById('replace-tablet-pack-1'),
            tablet = document.getElementById('replace-tablet-1');
        let posPack = -50,
            posTabletPack = -90,
            posTablet = 0;
        const id = setInterval(frame, 10);

        function frame() {
            if (posPack > 0) {
                clearInterval(id);
            } else {
                posPack++;
                posTablet = posTablet + 9;
                posTabletPack = posTabletPack + 2;
                pack.style.bottom = posPack + 'px';
                tabletPack.style.bottom = posTabletPack + 'px';
                tablet.style.bottom = posTablet + 'px';
            }
        }
    }

    function animationDropTabletDog() {
        const element = document.querySelector('.tablet-drop__tablet');
        let position = 5;
        const id = setInterval(frame, 5);

        function frame() {
            if (position > 48) {
                clearInterval(id)
            } else {
                position = position + 0.2;
                element.style.top = position + '%';
            }
        }
    }

    function animationDropTabletCat() {
        const element = document.querySelector('.tablet-drop__tablet');
        let position = 5;
        const id = setInterval(frame, 5);

        function frame() {
            if (position > 35) {
                clearInterval(id)
            } else {
                position = position + 0.2;
                element.style.top = position + '%';
            }
        }
    }

    function addAnimationPlusShakeWarning(item) {
        item.classList.add('plus-animation-shake-warning');
    }

    function AnimationShakeHard(item) {
        item.classList.add('item__shake-hard');
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

    function fadeOut(item) {
        item.classList.remove('item__fade-in');
        item.classList.toggle('item__fade-out');
    }

    function fadeIn(item) {
        item.classList.remove('item__fade-out');
        item.classList.toggle('item__fade-in');
    }
});


var paralax = document.getElementById("paralax");

/* коэфициент сдвига: 1 сдвиг равный смещению по оси Y, 0 без сдвига */
var moveCoef = 0.5;

window.addEventListener("scroll", scroll);
window.addEventListener("resize", scroll);
scroll();

function scroll() {
    /* берём огнаничивающий прямоугольник паралакса относительно окна (фрейма) */
    var r = paralax.getBoundingClientRect();

    /* центр паралакса */
    var paralaxYCenter = r.y + r.height / 2;
    /* центр экрана */
    var scrollYCenter = window.innerHeight / 2;

    /* Вычисляем смещение */
    var move = (paralaxYCenter - scrollYCenter) * moveCoef - 100;

    paralax.style.backgroundPositionY = move + "px";
}