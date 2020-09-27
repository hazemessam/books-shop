// Optimize the body hight
const body = document.querySelector('body');
const header = document.querySelector('header');

body.style.paddingTop = `${header.offsetHeight}px`;
body.style.height = `calc(100vh - ${header.offsetHeight}px)`;