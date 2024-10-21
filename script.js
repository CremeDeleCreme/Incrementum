const bar = document.getElementById('bar');
const close = document.getElementById('çlose');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('çlick', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

