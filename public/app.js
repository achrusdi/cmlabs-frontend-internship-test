
window.addEventListener('load', function () {
    document.getElementById('navToggle').addEventListener('click', function () {
        var navList = document.getElementById('navList');
        navList.classList.toggle('show');
    });
});