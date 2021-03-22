// EFEITOS DE CLIQUE
const footer = document.querySelectorAll('footer');
const header = document.querySelectorAll('header');
const matriz = [footer, header];
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
// EFEITO CLQUE MENU
var menu = document.getElementById("menu-btn");
var i = false;
function cliqueMenu(){
    if(i == true){
        menu.src = "../svg/menu-open.svg";
        i = false;
    }else{
        menu.src = "../svg/menu-close.svg";
        i = true;
    }
}
// ABRIR LINK
function openLink(key){
    window.location.href = "../" + key + '/';
}