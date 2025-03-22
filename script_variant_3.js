var lb = document.querySelector('#lightbox');
var img = document.querySelector('#lightbox-img');
var exit = document.querySelector('#close-btn');

document.querySelectorAll('.thumbnail').forEach(function(th) {
    th.onclick = function() {
        img.src = this.getAttribute('data-full');
        lb.classList.add('show');
    };
});

exit.onclick = function() {
    lb.classList.remove('show');
};