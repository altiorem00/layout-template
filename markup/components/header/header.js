document.addEventListener('DOMContentLoaded', function () {
    let oldScrollY = 0,
        pageInner = document.querySelector('.page__inner'),
        header = document.querySelector('.header'),
        headerHeight = header.clientHeight;
    const resizeObserver = new ResizeObserver((entries) => {
        headerHeight = entries[0].target.clientHeight;
        if (header.matches('.fixed')) pageInner.style.paddingTop = headerHeight + 'px';
    });
    resizeObserver.observe(header);

    window.addEventListener('scroll', function () {
        let scrolled = window.pageYOffset || document.documentElement.scrollTop;
        let diffY = oldScrollY - scrolled; /* diffY < 0 - скролл вниз, diffY > 0 - скролл вверх */
        if (scrolled > 0) {
            if (diffY < 0) {
                /* Скролл вниз */
                oldScrollY = 0;
                if (scrolled > headerHeight + 100) {
                    header.classList.add('fixed');
                    pageInner.style.paddingTop = headerHeight + 'px';
                    if (document.documentElement.clientWidth > 775) {
                        setTimeout(function () {
                            header.classList.add('animated');
                            header.classList.remove('show');
                        }, 150);
                    } else {
                        setTimeout(function () {
                            header.classList.add('animated');
                            header.classList.remove('show');
                        }, 150);
                    }
                }
            } else {
                /* Скролл вверх */
                if (scrolled > headerHeight + 50 && document.documentElement.clientWidth > 745) {
                    if (scrolled <= headerHeight + 50) {
                        /* Резко убираем хедер за пределы окна, чтобы не была видна анимация закрытия (до этого он выглядел как статичный) */
                        header.classList.remove('fixed');
                        pageInner.style.paddingTop = '0px';
                    } else {
                        header.classList.add('show');
                    }
                }
            }
        } else {
            /* При скролле в начало страницы */
            header.classList.remove('animated');
            header.classList.remove('fixed');
            pageInner.style.paddingTop = '0px';
            header.classList.remove('show');
        }
        oldScrollY = scrolled;
    });
    window.addEventListener(
        'resize',
        function (event) {
            let headerHeight = header.clientHeight;
            if (header.matches('.fixed')) {
                pageInner.style.paddingTop = headerHeight + 'px';
            }
        },
        { passive: true },
    );
});
