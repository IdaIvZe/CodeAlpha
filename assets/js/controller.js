document.getElementById('contenedor-button-pro').addEventListener('click', () => {
    const seccionComprarPlan = document.getElementById('seccion-comprar-plan');
    const body = document.getElementById('body');
    
    seccionComprarPlan.style.display = 'block';
    body.style.overflow = 'hidden';

});

document.getElementById('contenedor-button-enterprise').addEventListener('click', () => {
    const seccionComprarPlan = document.getElementById('seccion-comprar-plan');
    const body = document.getElementById('body');
    
    seccionComprarPlan.style.display = 'block';
    body.style.overflow = 'hidden';

});

document.getElementById('contenedor-button-free').addEventListener('click', () => {
    window.location.href = 'editor.html';
});

document.getElementById('button-siguiente').addEventListener('click', (event) => {
    event.preventDefault();
    const seccionComprarPlan2 = document.getElementById('seccion-comprar-plan-2');
    const seccionComprarPlan = document.getElementById('seccion-comprar-plan');
    const body = document.getElementById('body');
    
    seccionComprarPlan2.style.display = 'block';
    seccionComprarPlan.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('opciones-guardar').addEventListener('click', () => {
    const seccionOpcionesGuardar = document.getElementById('seccion-opciones-guardar');
    const body = document.getElementById('body');

    if (seccionOpcionesGuardar.style.display == 'none') {
        seccionOpcionesGuardar.style.display = 'block'
      } else {
        seccionOpcionesGuardar.style.display = 'none'
    }

    // seccionOpcionesGuardar.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('button-perfil').addEventListener('click', () => {
    const seccionMenuUsuario = document.getElementById('seccion-menu-usuario');
    const body = document.getElementById('body');

    if (seccionMenuUsuario.style.display == 'none') {
        seccionMenuUsuario.style.display = 'block'
      } else {
        seccionMenuUsuario.style.display = 'none'
    }

    body.style.overflow = 'hidden';
});

// document.getElementById('button-ajustes').addEventListener('click', () => {
//     const seccionOpcionesAjustes = document.getElementById('seccion-opciones-ajustes');
//     const body = document.getElementById('body');

//     if (seccionOpcionesAjustes.style.display == 'none') {
//         seccionOpcionesAjustes.style.display = 'block'
//       } else {
//         seccionOpcionesAjustes.style.display = 'none'
//     }

//     body.style.overflow = 'hidden';
// });

document.getElementById('button-ajustes').addEventListener('click', (event) => {
    console.log('Botón de ajustes clicado');

    const seccionOpcionesAjustes = document.getElementById('seccion-opciones-ajustes');
    const body = document.getElementById('body');

    // Mostrar u ocultar la sección
    if (seccionOpcionesAjustes.style.display === 'none' || seccionOpcionesAjustes.style.display === '') {
        console.log('Mostrando la sección');
        seccionOpcionesAjustes.style.display = 'block';
        body.style.overflow = 'hidden';

        // Agregar un escuchador de clics al documento para ocultar la sección al hacer clic fuera de ella
        // document.addEventListener('click', clickFueraDeSeccion);
    } else if (seccionOpcionesAjustes.style.display === 'block'){
        document.addEventListener('click', clickFueraDeSeccion);
        console.log('Ocultando la sección');
        // Ocultar la sección
        
        // seccionOpcionesAjustes.style.display = 'none';
        // body.style.overflow = 'auto';

        // // Remover el escuchador de clics después de ocultar la sección
        // document.removeEventListener('click', clickFueraDeSeccion);
    } else {
        console.log('Ocultando la sección');
        // Ocultar la sección
        
        seccionOpcionesAjustes.style.display = 'none';
        body.style.overflow = 'auto';

        // Remover el escuchador de clics después de ocultar la sección
        document.removeEventListener('click', clickFueraDeSeccion);
    }

    // Evitar que el clic dentro de la sección cierre la sección
    seccionOpcionesAjustes.addEventListener('click', (event) => {
        console.log('Clic dentro de la sección');
        event.stopPropagation();
    });

    function clickFueraDeSeccion(event) {
        console.log('Clic fuera de la sección');
        // Verificar si el clic fue fuera de la sección
        if (!seccionOpcionesAjustes.contains(event.target)) {
            // Ocultar la sección
            seccionOpcionesAjustes.style.display = 'none';
            body.style.overflow = 'auto';

            // Remover el escuchador de clics después de ocultar la sección
            document.removeEventListener('click', clickFueraDeSeccion);
        }
    }
});



  

// document.addEventListener('DOMContentLoaded', function () {
//     const buttonPro = document.getElementById('contenedor-button-pro');
//     const seccionComprarPlan = document.getElementById('seccion-comprar-plan');

//     buttonPro.addEventListener('click', () => {

//         if (seccionComprarPlan.style.display === 'none') {
//             seccionComprarPlan.style.display === 'block';
//         } else {
//             seccionComprarPlan.style.display === 'none';
//         }
//     });
// });
  




// document.getElementById('button-pro').addEventListener('click', () => {
//     const mostrarComprarPlanes = document.getElementById('seccion-comprar-plan');
//     const seccionPlanes = document.getElementById('seccion-planes');
//     const body = document.getElementById('body');

//     mostrarComprarPlanes.style.display = 'block';
//     seccionPlanes.style.display = 'none';
//     body.style.overflow = 'hidden';
// })

// document.getElementById('opciones-guardar').addEventListener('click', () => {
//     const mostrarSeccionOpcionesGuardar = document.getElementById('seccion-opciones-guardar');

//     mostrarSeccionOpcionesGuardar.style.display = 'block';
// })

// const ocultarSecciones = () => {
//     document.getElementById('seccion-opciones-guardar').style.display = 'none';
// }

// const mostrarOpcionesGuardar = () => {
//     ocultarSecciones();
//     document.getElementById('opciones-guardar').style.display = 'block';
// }
