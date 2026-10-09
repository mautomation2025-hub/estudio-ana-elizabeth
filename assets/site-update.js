/* Mede o aviso sem coletar dados nem alterar integrações existentes. */
(() => {
    const notice = document.querySelector('.site-update-notice');
    if (!notice) return;
    const navbar = document.getElementById('navbar');

    const updateHeight = () => {
        document.documentElement.style.setProperty(
            '--site-update-height',
            `${Math.ceil(notice.getBoundingClientRect().height)}px`
        );
        if (navbar) {
            const menu = document.getElementById('mobile-menu');
            const navigationHeight = navbar.getBoundingClientRect().height - (menu?.getBoundingClientRect().height || 0);
            document.documentElement.style.setProperty('--site-navigation-height', `${Math.ceil(navigationHeight)}px`);
        }
    };

    updateHeight();
    if ('ResizeObserver' in window) {
        const observer = new ResizeObserver(updateHeight);
        observer.observe(notice);
        if (navbar) observer.observe(navbar);
    } else {
        window.addEventListener('resize', updateHeight, { passive: true });
    }
})();

