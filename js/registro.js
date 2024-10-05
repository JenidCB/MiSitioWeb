document.getElementById('registroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional.

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const genero = document.getElementById('genero').value;

    // Crear un objeto con los datos del usuario
    const usuario = {
        nombre: nombre,
        apellidos: apellidos,
        email: email,
        password: password,
        genero: genero
    };

    // Guardar los datos en localStorage (como un string)
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = 'login.html';
});