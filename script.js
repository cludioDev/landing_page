function menu() { 
    if( document.querySelector('.menu').classList.contains('menu_aberto')) { 
        document.querySelector('.menu').classList.remove('menu_aberto');
        document.querySelector('.menu').classList.add('menu_fechado')
    }else { 
        document.querySelector('.menu').classList.remove('menu_fechado');
        document.querySelector('.menu').classList.add('menu_aberto');
    }
}