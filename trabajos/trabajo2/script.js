window.addEventListener('DOMContentLoaded', function() {
    //Hace referencia a los elementos utilizados, dgE
    //Elemento con el id circle
    let circle = document.getElementById('circle');
    let playBtn = document.getElementById('play');
    let pauseBtn = document.getElementById('pause');
    let stopBtn = document.getElementById('stop');
    let reverseBtn = document.getElementById('reverse');

    //Se agregan los EventListener, para controlar la animación
    
    //Establece la propiedad aPS, lo que hace que se reproduzca
    playBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'running';
    });
    //Pausa la animación
    pauseBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'paused';
    });
    //Detiene la animación 
    stopBtn.addEventListener('click', function() {
      circle.style.animationPlayState = 'paused';
      circle.style.left = '0';
    });
    //Verifica si la prop. aD, es normal, cambia  reverse
    reverseBtn.addEventListener('click', function() {
    if (circle.style.animationDirection === 'normal') {
        circle.style.animationDirection = 'reverse';
        //si no cambia a normal
    }else {
        circle.style.animationDirection = 'normal';
    }

    });
  });
  