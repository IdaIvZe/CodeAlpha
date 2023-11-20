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

document.getElementById('btn-login').addEventListener('click', function() {
    window.location.href = 'editor.html';
});

document.getElementById('btn-sign').addEventListener('click', function() {
    window.location.href = 'editor.html';
});