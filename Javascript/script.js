function menuShow () {
    let menuMobile = document.querySelector('.mobile-nav');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        // document.querySelector('.icon').src = "./Resources/Icons/menu-icon.svg";
    } else {
        menuMobile.classList.add('open')
        // document.querySelector('.icon').src = "./Resources/Icons/ham-menu-close.svg";
    }
}