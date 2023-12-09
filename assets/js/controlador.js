

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

function enviarDatosSign(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const usuario = document.getElementById('user').value;
    const email = document.getElementById('e-mail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-2').value;
    const nombres = document.getElementById('names').value;
    

    const datosFormulario = {
        name: usuario,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        nombres: nombres
    }

    console.log(datosFormulario);

    // Realizar una solicitud POST a la URL deseada
    const registroUsuario = async () => {

    const cargarRegistroUsuario = await fetch('http://localhost:3000/users/sign', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
    });

    response = await cargarRegistroUsuario.json();
    const usuariosLogueados = [response.usuario_sign];

    console.log("usuarios logueados: ", usuariosLogueados);

    let usuarioRegistrado = false;
            usuariosLogueados.forEach(usuario_sign => {
                if (usuario_sign.registrado) {
                    usuarioRegistrado = true;
                    console.log('El usuario ya está registrado');
                }
            });

            // Si ningún usuario está registrado, redirigir a los planes
            if (!usuarioRegistrado) {
                console.log('Ningún usuario está registrado, redirigiendo al editor');
                window.location.href = 'planes.html';
            }
    }

    registroUsuario();
}


function enviarDatosLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('correo').value;
    const password = document.getElementById('contraseña').value;
    

    const datosFormularioLogin = {
        name: usuario,
        email: email,
        password: password
    }

    console.log(datosFormularioLogin);

    // Realizar una solicitud POST a la URL deseada
    const loginUsuario = async () => {

    const cargarLoginUsuario = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormularioLogin)
    });

    response = await cargarLoginUsuario.json();
    const usuariosLogueados = [response.usuario_login];

    console.log("usuarios logueados: ", usuariosLogueados);

    let usuarioRegistrado = false;
            usuariosLogueados.forEach(usuario_login => {
                if (usuario_login.registrado === false) {
                    console.log('El usuario no está registrado');
                } else{
                    usuarioRegistrado = true;
                    console.log("Usuario encontrado");
                }
            });

            // Si ningún usuario está registrado, redirigir a los planes
            if (usuarioRegistrado) {
                console.log('Redirigiendo al editor');
                window.location.href = 'editor.html';
            }
    }

    loginUsuario();
}