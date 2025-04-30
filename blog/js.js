window.addEventListener('load', function() {
    const pageLoader = document.querySelector('.page-loader');
    setTimeout(function() {
        pageLoader.classList.add('fade-out');
    }, 500);
});