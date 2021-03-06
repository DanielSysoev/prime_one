//burger handler

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__navs');
    const main = document.querySelector('body');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__menu-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
        main.classList.add('disable-scroll');
    });
    menuCloseItem.addEventListener('click', () => {
        main.classList.remove('disable-scroll');
        menu.classList.remove('header__nav_active');
    });
    if (true) {
        menuLinks.forEach(element => {
            element.addEventListener('click', () => {
                main.classList.remove('disable-scroll');
                menu.classList.remove('header__nav_active');
            });
        })
    }
}());

//SMOOTH SCROLL

(function () {

    const smoothScroll = function (targetEl, duration) {

        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;
        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());