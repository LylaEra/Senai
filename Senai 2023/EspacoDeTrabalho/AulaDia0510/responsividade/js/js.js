const btnmenu = document.getElementById('btnMenu')

function toogleMenu(event){
    if (event.type === 'touchstart') event.preventDefault
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnmenu.addEventListener('click', toogleMenu)
btnmenu.addEventListener('touchstart', toogleMenu)