function getScrollbarWidth() {
    var scroll = window.innerWidth - document.documentElement.clientWidth;
    if (scroll == 17) {
        document.getElementsByClassName('dum_header').style.marginRight = '17px';
    } else {
        document.getElementsByClassName('dum_header').style.marginRight = '0px';
    }
}
// return window.innerWidth - document.documentElement.clientWidth;