// Establece la fecha del evento (Reemplaza con la fecha de tu evento)
const fechaEvento = new Date('Feb 08, 2025 14:00:00').getTime();

const actualizarCuentaRegresiva = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    // Cálculos de tiempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra los resultados
    document.getElementById('diasTiempo').innerText = dias;
    document.getElementById('horasTiempo').innerText = horas;
    document.getElementById('minutosTiempo').innerText = minutos;
    document.getElementById('segundosTiempo').innerText = segundos;

    // Si la cuenta regresiva ha terminado
    if (distancia < 0) {
        clearInterval(actualizarCuentaRegresiva);
        document.querySelector('.cuenta-regresiva').innerHTML = '<h2>¡El gran día ha llegado!</h2>';
    }
}, 1000);



document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var abrirInvitacion = document.getElementById('abrirInvitacion');
    var contenidoPrincipal = document.getElementById('contenidoPrincipal');

    // Variables para almacenar la posición del scroll
    var scrollPosition = 0;

    // Función para bloquear el scroll
    function disableScroll() {
      // Guarda la posición actual del scroll
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // Aplica estilos para bloquear el scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
    }

    // Función para habilitar el scroll
    function enableScroll() {
      // Elimina los estilos que bloquean el scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restaura la posición del scroll
      window.scrollTo(0, scrollPosition);
    }

    // Bloquear el scroll al cargar la página
    disableScroll();

    // Evento al hacer clic en el sobre
    abrirInvitacion.addEventListener('click', function() {
        overlay.style.display = 'none'; // Oculta el overlay
        contenidoPrincipal.style.display = 'block'; // Muestra el contenido principal
        enableScroll(); // Habilita el scroll
    });
});