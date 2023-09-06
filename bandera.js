const typed = new Typed('#titulo',{
    strings: ['<i>Día ^300 De ^300 La ^300 Bandera<i/>'],
    typedSpeed: 75,
    startDelay:1000,
    cursorChar: '',
    loop:false

})

const suma = document.getElementById('suma');// -> Uso del DOM donde llama el elemento en html
const resta = document.getElementById('resta');
const counter = document.getElementById('valor');// -> Uso del DOM donde llama el elemento en html
let click = 0;// creación de variale tipo number

suma.addEventListener('click',() =>{// Uso de Event Listener
    click += 1;// suma a la variable en 1 cada vez que le den click
    counter.textContent = click;//modifica el valor
    if (click > 10) {// si el valor es mayor a 10 muestra el siguiente texto
        counter.textContent = 'no se puede aumentar más'
    }

})

resta.addEventListener('click',() =>{// Uso de Event Listener
    click -= 1;// resta  a la variable 1 cada vez que le den click
    counter.textContent = click;//modifica el valor
    if (click < 0) {// si el valor es menor a cero muestra el texto
        counter.textContent = 'no se puede descontar más'
    }

})