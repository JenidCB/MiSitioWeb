window.onload = function() {
    // Recuperar el usuario logueado del localStorage
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));

    // Verificar si hay un usuario logueado
    if (usuarioLogueado) {
        // Obtener el elemento del menú donde se mostrará el nombre del usuario
        const usuarioElement = document.getElementById('usuarioLogueado');
        
        // Mostrar el nombre del usuario y el enlace para cerrar sesión
        usuarioElement.innerHTML = `Hola, ${usuarioLogueado.nombre} <a href="#" id="cerrarSesion">Cerrar sesión</a>`;

        // Añadir evento para cerrar sesión
        document.getElementById('cerrarSesion').addEventListener('click', function() {
            localStorage.removeItem('usuarioLogueado'); // Borrar el usuario del localStorage
            window.location.href = 'login.html'; // Redirigir a la página de login después de cerrar sesión
        });
    }
};