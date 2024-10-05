document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío tradicional del formulario.

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtener los datos del usuario del localStorage
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    // Verificar si el correo y la contraseña coinciden
    if (usuario && usuario.email === email && usuario.password === password) {
        // Guardar el nombre del usuario logueado en localStorage
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));

        // Redirigir a la página principal
        window.location.href = 'index.html';
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }
});