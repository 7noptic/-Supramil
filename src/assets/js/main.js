"use strict";
window.scrollTo(0, 0);
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
})
document.addEventListener("DOMContentLoaded", function (event) {

    let sections = document.querySelectorAll('section'),
        sectionSelectCat = document.querySelector('#select-weight-cat'),
        plusClose = document.querySelectorAll('.plus-close-pos'),
        specialPlus = document.querySelectorAll('.special__plus'),
        triggerCat = 0,
        blockTwo = document.getElementById('block-two'),

        slide1Right = document.querySelectorAll('.pill-selection'),
        slide1Left = document.querySelectorAll('.pet-selection > a, .pet-selection>h3,nav,.header__logo'),
        slide1Fade = document.querySelector('.header'),
        selectAnimal = document.querySelectorAll('.pet-selection__link'),

        btnSelectWeightAnimal = document.querySelectorAll('.card__item'),

        selectTabletLink = document.querySelectorAll('.arsenal__plus'),
        selectTabletLinked = document.querySelectorAll('.arsenal__plus-link'),
        arsenalText = document.querySelectorAll('.arsenal__plus-text'),

        footer = document.querySelector('footer');

    const arrImgPack = ['img/special-dog-pack-1-min.webp', 'img/special-dog-pack-2-min.webp', 'img/special-dog-pack-3-min.webp', 'img/special-cat-pack-1-min.webp', 'img/special-cat-pack-2-min.webp'],
        arrImgTabletPack = ['img/dog-tablet-1-min.png', 'img/dog-tablet-2-min.png', 'img/dog-tablet-3-min.png', 'img/cat-tablet-1-min.png', 'img/cat-tablet-2-min.png'],
        arrImgTablet = ['img/tablet-dog-1-min.png', 'img/tablet-min.png', 'img/tablet-dog-2-min.png', 'img/tablet-cat-1-min.png', 'img/tablet-cat-2-min.png'],
        arrImgAnimalDog = ['img/tabletdropbg-min.webp', 'img/resultbg-min.webp', 'img/securitybg-min.webp', 'img/tastebg-min.webp'],
        arrImgAnimalCat = ['img/tabletdropbg-cat-min.webp', 'img/resultbg-cat-min.webp', 'img/securitybg-cat-min.webp', 'img/tastebg-cat-min.webp'],

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
        setTimeout(pushUpFlex, 590, document.querySelector('.push-up'));
        fadeIn(item);
    }

    function pushUpFlex(item) {
        item.style.display = "flex";
        item.style.position = "fixed";
        item.style.bottom = "15px";
        item.style.right = "15px";
    }

    /* ВТОРОЙ СЛАЙД */
    btnSelectWeightAnimal[0].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[0], arrImgTabletPack[0], arrImgTablet[0], arrImgAnimalDog, arrTextTitle[0]));
    btnSelectWeightAnimal[1].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[1], arrImgTabletPack[1], arrImgTablet[1], arrImgAnimalDog, arrTextTitle[1]));
    btnSelectWeightAnimal[2].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[2], arrImgTabletPack[2], arrImgTablet[2], arrImgAnimalDog, arrTextTitle[2]));

    btnSelectWeightAnimal[3].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[0], arrImgTabletPack[0], arrImgTablet[0], arrImgAnimalDog, arrTextTitle[0]));
    btnSelectWeightAnimal[4].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[1], arrImgTabletPack[1], arrImgTablet[1], arrImgAnimalDog, arrTextTitle[1]));
    btnSelectWeightAnimal[5].addEventListener('click', () => selectWeightAnimals(sections[1], arrImgPack[2], arrImgTabletPack[2], arrImgTablet[2], arrImgAnimalDog, arrTextTitle[2]));

    btnSelectWeightAnimal[6].addEventListener('click', () => {
        selectWeightAnimals(sections[6], arrImgPack[3], arrImgTabletPack[3], arrImgTablet[3], arrImgAnimalCat, arrTextTitle[3]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[7].addEventListener('click', () => {
        selectWeightAnimals(sections[6], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[4]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[8].addEventListener('click', () => {
        selectWeightAnimals(sections[6], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[3]);
        selectWeightCat();
    });
    btnSelectWeightAnimal[9].addEventListener('click', () => {
        selectWeightAnimals(sections[6], arrImgPack[4], arrImgTabletPack[4], arrImgTablet[4], arrImgAnimalCat, arrTextTitle[4]);
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
        setTimeout(addAnimationPlusShakeWarning, 1190, arsenalText[0]);
        addAnimationPlusShakeWarning(selectTabletLink[1]);
        addAnimationPlusShakeWarning(arsenalText[1]);


        fadeOut(item);
        setTimeout(displayNone, 590, item);
        setTimeout(displayFlex, 590, sections[2]);
        setTimeout(animationUpPack, 590);
        fadeIn(sections[2]);
        //body.style.overflowY = 'scroll';
        setTimeout(displayFlex, 590, sections[13]);
        setTimeout(displayFlex, 590, blockTwo);
        setTimeout(displayFlex, 590, sections[7]);
        setTimeout(displayFlex, 590, sections[14]);
        setTimeout(displayFlex, 590, footer);
        fadeIn(sections[13]);
        fadeIn(blockTwo);
        fadeIn(sections[7]);
        fadeIn(sections[14]);
        fadeIn(footer);
    }

    function selectWeightCat() {
        triggerCat++;
        document.getElementById('replace-animal-2').classList.remove('result__img');
        document.getElementById('replace-animal-2').classList.remove('result__img-img');
        document.getElementById('replace-animal-2').classList.toggle('result__img-img-cat');
        document.getElementById('replace-animal-4').classList.toggle('taste__bg');
        document.getElementById('replace-animal-4').classList.toggle('taste__bg-cat');
        document.getElementById('replace-tablet-4').classList.toggle('taste__tablet');
        document.getElementById('replace-tablet-4').classList.toggle('taste__tablet-cat');
    }

    function replaceText(item) {
        document.getElementById('replace_text').textContent = item;
    }

    /* ТРЕТИЙ СЛАЙД */
    selectTabletLinked[0].addEventListener('click', () => {
        setTimeout(plusDisabled, 590, selectTabletLink[0]);
        selectCestodOrNematod(sections[4]);

        setTimeout(animationCestod, 2200);

        setTimeout(deadWorms, 4000, sections[4], 'cestod', 'cestod2');
        setTimeout(deadWorms, 4500, sections[4], 'cestod2', 'cestod3');
        setTimeout(deadWorms, 5000, sections[4], 'cestod3', 'cestod4');
        setTimeout(deadWorms, 5500, sections[4], 'cestod4', 'cestod5');
        setTimeout(deadWorms, 6000, sections[4], 'cestod5', 'cestod6');
        setTimeout(deadWorms, 6500, sections[4], 'cestod6', 'cestod7');
        setTimeout(deadWorms, 7000, sections[4], 'cestod7', 'cestod8');
        setTimeout(deadWorms, 7500, sections[4], 'cestod8', 'cestod9');
        setTimeout(deadWorms, 8000, sections[4], 'cestod9', 'cestod10');
    });

    selectTabletLinked[1].addEventListener('click', () => {
        setTimeout(plusDisabled, 590, selectTabletLink[1]);

        selectCestodOrNematod(sections[5]);

        setTimeout(animationNematod, 2200);
        setTimeout(deadWorms, 4000, sections[5], 'nematod', 'nematod2');
        setTimeout(deadWorms, 4500, sections[5], 'nematod2', 'nematod3');
        setTimeout(deadWorms, 5000, sections[5], 'nematod3', 'nematod4');
        setTimeout(deadWorms, 5500, sections[5], 'nematod4', 'nematod5');
        setTimeout(deadWorms, 6000, sections[5], 'nematod5', 'nematod6');
        setTimeout(deadWorms, 6500, sections[5], 'nematod6', 'nematod7');
        setTimeout(deadWorms, 7000, sections[5], 'nematod7', 'nematod8');
        setTimeout(deadWorms, 7500, sections[5], 'nematod8', 'nematod9');
        setTimeout(deadWorms, 8000, sections[5], 'nematod9', 'nematod10');
    });

    function deadWorms(item, deleteclass, addclass) {
        item.classList.remove(deleteclass);
        item.classList.add(addclass);
    }

    function selectCestodOrNematod(itemStart) {
        fadeOut(sections[2]);
        setTimeout(displayNone, 590, sections[2]);
        setTimeout(displayFlex, 590, sections[3]);
        setTimeout(anchorScroll, 590, sections[3]);
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
        plusClose[0].addEventListener('click', () => {
            CestodOrNematod(sections[4]);
        });
        plusClose[1].addEventListener('click', () => {
            CestodOrNematod(sections[5]);
        });

        function CestodOrNematod(itemStart) {
            fadeOut(itemStart);
            setTimeout(displayNone, 590, itemStart);
            setTimeout(displayFlex, 590, sections[2]);
            setTimeout(anchorScroll, 590, sections[2])
            fadeIn(sections[2]);
        }
    }

    /* СЕДЬМОЙ СЛАЙД ОТКРЫТЬ*/
    specialPlus[0].addEventListener('click', () => specialPlusOpen(sections[8], specialPlus[0]));
    specialPlus[1].addEventListener('click', () => specialPlusOpen(sections[9], specialPlus[1]));
    specialPlus[2].addEventListener('click', () => specialPlusOpen(sections[12], specialPlus[2]));
    specialPlus[3].addEventListener('click', () => specialPlusOpen(sections[10], specialPlus[3]));
    specialPlus[4].addEventListener('click', () => specialPlusOpen(sections[11], specialPlus[4]));

    /* СЕДЬМОЙ СЛАЙД ЗАКРЫТЬ*/
    let triggerPlusClose = 0;

    plusClose[2].addEventListener('click', () => specialPlusClose(sections[8]));
    plusClose[3].addEventListener('click', () => specialPlusClose(sections[9]));
    plusClose[4].addEventListener('click', () => specialPlusClose(sections[10]));
    plusClose[5].addEventListener('click', () => specialPlusClose(sections[11]));
    plusClose[6].addEventListener('click', () => specialPlusClose(sections[12]));


    function specialPlusOpen(item, itemPlus) {
        setTimeout(plusDisabled, 590, itemPlus);
        fadeOut(sections[7]);
        setTimeout(displayNone, 590, sections[7]);
        setTimeout(displayFlex, 590, item);
        setTimeout(anchorScroll, 590, item);
        fadeIn(item);
    }
    function specialPlusClose(item) {
        /*   if (triggerPlusClose <= 3) {*/
        fadeOut(item);
        setTimeout(displayNone, 590, item);
        setTimeout(displayFlex, 590, sections[7]);
        setTimeout(anchorScroll, 590, sections[7]);
        fadeIn(sections[7]);
        triggerPlusClose++;
        /* } else {
             fadeOut(main);
             setTimeout(displayNone, 590, main);
             setTimeout(displayNone, 590, item);

         }*/
    }
    function anchorScroll(item) {
        item.scrollIntoView({
            behavior: 'smooth',
            block: "end", inline: "nearest"
        });
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
        /* window.addEventListener("resize", function() {

         });*/
        const id = setInterval(frame, 10);

        function frame() {

            if (posPack > 0) {
                clearInterval(id);
            } else {
                if (window.matchMedia("(min-width: 576px)").matches) {
                    variationFrame(1, 9, 2)
                } else if (window.matchMedia("(max-width: 575px)").matches && window.matchMedia("(min-width: 475px)").matches){
                    variationFrame(0.3, 2, 0.6);
                }else if (window.matchMedia("(max-width: 474px)").matches && window.matchMedia("(min-width: 400px)").matches){
                    variationFrame(0.3, 1.8, 0.6);
                }else if (window.matchMedia("(max-width: 399px)").matches && window.matchMedia("(min-width: 360px)").matches){
                    variationFrame(0.3, 1.4, 0.6);
                }else {
                    variationFrame(0.25, 1.1, 0.5);
                }


            }
        }

        function variationFrame(varPosPack, varPosTablet, varPosTabletPack) {
            posPack = posPack + varPosPack;
            posTablet = posTablet + varPosTablet;
            posTabletPack = posTabletPack + varPosTabletPack;
            pack.style.bottom = posPack + 'px';
            tabletPack.style.bottom = posTabletPack + 'px';
            tablet.style.bottom = posTablet + 'px';
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
                if (window.matchMedia("(min-width: 760px)").matches) {
                    variationFrame(0.2);
                } else if (window.matchMedia("(min-width: 575px)").matches) {
                    variationFrame(0.1);
                } else {
                    variationFrame(0.05);
                }

                function variationFrame(pos) {
                    position = position + pos;
                    element.style.top = position + '%';
                }

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
                if (window.matchMedia("(min-width: 760px)").matches) {
                    variationFrame(0.2);
                } else if (window.matchMedia("(min-width: 575px)").matches) {
                    variationFrame(0.1);
                } else {
                    variationFrame(0.05);
                }

                function variationFrame(pos) {
                    position = position + pos;
                    element.style.top = position + '%';
                }

            }
        }
    }

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

    function fadeOut(item) {
        item.classList.remove('item__fade-in');
        item.classList.toggle('item__fade-out');
    }

    function fadeIn(item) {
        item.classList.remove('item__fade-out');
        item.classList.toggle('item__fade-in');
    }
});


let paralax = document.getElementById("paralax"),
    moveCoef = 0.5;

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