document.getElementById('button-iniciar-sesion').addEventListener('click', () =>{
    const mostrarLogin = document.getElementById('login-section');
    const body = document.getElementById('body');

    mostrarLogin.style.display = 'block';
    body.style.overflow = 'hidden';
});
//Al dar click en el boton registrarse muestra la seccion de registro
document.getElementById('button-registrarse').addEventListener('click', () =>{
    const mostrarSign = document.getElementById('sign-section');
    const Login = document.getElementById('login-section');
    const body = document.getElementById('body');

    mostrarSign.style.display = 'block';
    Login.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('registro').addEventListener('click', () =>{
    const mostrarSign = document.getElementById('sign-section');
    const Login = document.getElementById('login-section');
    const body = document.getElementById('body');

    mostrarSign.style.display = 'block';
    Login.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('logueo').addEventListener('click', () =>{
    const mostrarLogin = document.getElementById('login-section');
    const Sign = document.getElementById('sign-section');
    const body = document.getElementById('body');

    mostrarLogin.style.display = 'block';
    Sign.style.display = 'none';
    body.style.overflow = 'hidden';
});


// document.getElementById('btn-login').addEventListener('click', function(event) {
//     // Obtener los valores de los campos de usuario y contraseña
//     var usuario = document.getElementById('usuario').value;
//     var contraseña = document.getElementById('contraseña').value;

//     // Verificar si los campos están vacíos
//     if (usuario.trim() === '' || contraseña.trim() === '') {
//         // Evitar la acción predeterminada del botón (redirección)
//         event.preventDefault();
//         // Mostrar un mensaje de error o realizar alguna otra acción
//         console.log('Por favor, completa todos los campos.');
//     } else {
//         // Redirigir si los campos están completos
//         window.location.href = 'editor.html';
//     }
// });


// document.getElementById('btn-sign').addEventListener('click', function() {
//     window.location.href = 'editor.html';
// });