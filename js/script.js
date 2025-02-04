const dropdown = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')
const box = document.querySelector('.slider')
const zoom = document.querySelector('.zoom-text')


let conter = 0;

function slider() {
    conter++;

    if(conter >= 5) {
       conter = 0; 
    }

    box.style.transform = `translateX(${-conter*800}px)`;
}

setInterval(slider, 4000);

dropdown.addEventListener('mouseover', () => {
    dropdownContent.classList.add('show');
})

dropdown.addEventListener('mouseout', () => {
    dropdownContent.classList.remove('show');
})

zoom.addEventListener('mouseover', () => {
zoom.classList.add('small')
})

zoom.addEventListener('mouseout', () => {
zoom.classList.remove('small')
})

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)

  });
}
const titulo = document.querySelector('.text-sobre');
typeWrite(titulo);



