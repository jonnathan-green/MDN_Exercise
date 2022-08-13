let numeroRandom = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector('.intentos');
const respuesta = document.querySelector('.respuesta');
const pistas = document.querySelector('.pistas');

const enviarAdivinanza = document.querySelector('.enviarAdivinanza');
const campoAdivinanzas = document.querySelector('.campoAdivinanzas');

let cuentaCero = 1;
let reiniciarBoton;

function comprobarAdivinanza(){

    let usuarioAdivinanza = Number(campoAdivinanzas.value);
    if(cuentaCero === 1){
        intentos.textContent = 'intentos anteriores: ';
    }
        intentos.textContent += usuarioAdivinanza + ',';


        if(usuarioAdivinanza === numeroRandom){
            respuesta.textContent = '¡Felicidades! Ganaste';
            respuesta.style.backgroundColor= 'rgb(19, 107, 141)';
            pistas.textContent = '';
            setGameOver;
        }
        else if (cuentaCero === 10){
            respuesta.textContent = 'Fin del juego';
            setGameOver;
        }
            else {
            respuesta.textContent = 'Equivocado';
            respuesta.style.backgroundColor = 'rgb(175, 21, 85)'
            if (usuarioAdivinanza < numeroRandom){
                pistas.textContent = 'El numero es mas bajo';
            } else if(usuarioAdivinanza > numeroRandom){
                pistas.textContent = 'El numero es mas grande';
            }
        }
        cuentaCero++;
        campoAdivinanzas.value= '';
        campoAdivinanzas.focus();

    }

    enviarAdivinanza.addEventListener('click', comprobarAdivinanza);


function setGameOver (){
    campoAdivinanzas.disabled = true;
    enviarAdivinanza.disabled = true;
    reiniciarBoton.document.createElement('button')
    reiniciarBoton.textContent = 'Reiniciar el juego';
    document.body.appendChild(reiniciarBoton);
    reiniciarBoton.addEventListener('click', reiniciarJuego);
}

    function reiniciarJuego (){
        cuentaCero = 1;

    const contenedorResultado = document.querySelectorAll('.contenedorResultado');
    for(let i = 0; i < contenedorResultado.length; i++);
    contenedorResultado[i].textContent = '';

    reiniciarBoton.parentNode.removeChild(reiniciarBoton);
    campoAdivinanzas.disabled = false;
    enviarAdivinanza.disabled = false;
    campoAdivinanzas.value = '';
    campoAdivinanzas.focus();

    respuesta.style.background = 'white';

    numeroRandom = Math.floor(Math.random () * 100) + 1;


}