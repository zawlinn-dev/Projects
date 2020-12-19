let frame = document.querySelector('.frame');
let log = document.querySelector('.signin');
let reg =  document.querySelector('.signup');

reg.onclick = () => {

    frame.classList.add('move');
}

log.onclick = () => {

    frame.classList.remove('move');
}