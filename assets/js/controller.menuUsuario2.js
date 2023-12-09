
document.getElementById('nuevo-proyecto-editor').addEventListener('click', () => {
    const seccionNuevoProyecto = document.getElementById('seccion-nuevo-proyecto-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevoProyecto.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('button-cancelar-nuevo-proyecto').addEventListener('click', () => {
    const seccionNuevoProyecto = document.getElementById('seccion-nuevo-proyecto-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevoProyecto.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('button-crear-nuevo-proyecto').addEventListener('click', () => {
    const seccionNuevoProyecto = document.getElementById('seccion-nuevo-proyecto-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevoProyecto.style.display = 'none';
    body.style.overflow = 'hidden';

    alert('Proyecto creado con éxito!!!');
});

document.getElementById('button-cancelar-nueva-carpeta').addEventListener('click', () => {
    const seccionNuevaCarpeta = document.getElementById('seccion-nueva-carpeta-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevaCarpeta.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('button-crear-nueva-carpeta').addEventListener('click', () => {
    const seccionNuevaCarpeta = document.getElementById('seccion-nueva-carpeta-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevaCarpeta.style.display = 'none';
    body.style.overflow = 'hidden';


    alert('Carpeta creada con éxito!!!');
});

document.getElementById('nueva-carpeta').addEventListener('click', () => {
    const seccionNuevaCarpeta = document.getElementById('seccion-nueva-carpeta-editor');
    const body = document.getElementById('body'); 
    
    seccionNuevaCarpeta.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('nuevo-archivo').addEventListener('click', () => {
    window.location.href = 'editor.html';
});

document.getElementById('mis-proyectos').addEventListener('click', () => {
    const seccionMisProyectos = document.getElementById('seccion-mis-proyectos-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body'); 
    
    seccionMisProyectos.style.display = 'block';
    seccionPlanes.style.display = 'none';
    body.style.overflow = 'hidden';
});

document.getElementById('mis-carpetas').addEventListener('click', () => {
    const seccionMisCarpetas = document.getElementById('seccion-mis-carpetas-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body');
    
    seccionMisCarpetas.style.display = 'block';
    seccionPlanes.style.display = 'none';
    body.style.overflow = 'hidden';

});

document.getElementById('compartidos-conmigo').addEventListener('click', () => {
    const seccionCompartidosConmigo = document.getElementById('seccion-compartidos-conmigo-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body');
    
    seccionCompartidosConmigo.style.display = 'block';
    seccionPlanes.style.display = 'none';
    body.style.overflow = 'hidden';

});

document.getElementById('atras-proyectos').addEventListener('click', () => {
    const seccionMisProyectos = document.getElementById('seccion-mis-proyectos-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body'); 
    
    seccionMisProyectos.style.display = 'none';
    seccionPlanes.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('atras-carpetas').addEventListener('click', () => {
    const seccionMisCarpetas = document.getElementById('seccion-mis-carpetas-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body');
    
    seccionMisCarpetas.style.display = 'none';
    seccionPlanes.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('atras-compartidos').addEventListener('click', () => {
    const seccionCompartidosConmigo = document.getElementById('seccion-compartidos-conmigo-editor');
    const seccionPlanes = document.getElementById('seccion-planes');
    const body = document.getElementById('body');
    
    seccionCompartidosConmigo.style.display = 'none';
    seccionPlanes.style.display = 'block';
    body.style.overflow = 'hidden';
});

// document.getElementById('mas-proyectos').addEventListener('click', () => {
//     const seccionOpcionesEllipsis = document.getElementById('seccion-opciones-ellipsis');
//     const body = document.getElementById('body'); 
    
//     seccionOpcionesEllipsis.style.display = 'block';
//     body.style.overflow = 'hidden';
// });

document.getElementById('mas-proyectos').addEventListener('click', () => {
    const seccionOpcionesEllipsis = document.getElementById('seccion-opciones-ellipsis-editor');
    const body = document.getElementById('body');

    if (seccionOpcionesEllipsis.style.display == 'none') {
        seccionOpcionesEllipsis.style.display = 'block'
      } else {
        seccionOpcionesEllipsis.style.display = 'none'
    }

    // seccionOpcionesGuardar.style.display = 'block';
    body.style.overflow = 'hidden';
});