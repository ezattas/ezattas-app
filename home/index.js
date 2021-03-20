const footer = document.querySelectorAll('footer');
const header = document.querySelectorAll('header');
const img = document.querySelectorAll('img');
const div = document.querySelectorAll('div');
const matriz = [footer, header, img, div];
for(var i = 0; i < matriz.length; i++){
    matriz[i].forEach(btn => {
        btn.addEventListener('click', function(e){
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
            setTimeout(() => {
                ripples.remove()
            }, 1000);
        })
    })
}
