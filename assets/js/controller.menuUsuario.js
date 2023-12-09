document.getElementById('contenedor-button-enterprise').addEventListener('click', () => {
    const seccionComprarPlan = document.getElementById('seccion-comprar-plan');
    const body = document.getElementById('body');
    
    seccionComprarPlan.style.display = 'block';
    body.style.overflow = 'hidden';

});

document.getElementById('nuevo-proyecto').addEventListener('click', () => {
    const seccionNuevoProyecto = document.getElementById('seccion-nuevo-proyecto');
    const body = document.getElementById('body'); 
    
    seccionNuevoProyecto.style.display = 'block';
    body.style.overflow = 'hidden';
});

document.getElementById('nueva-carpeta').addEventListener('click', () => {
    const seccionNuevaCarpeta = document.getElementById('seccion-nueva-carpeta');
    const body = document.getElementById('body'); 
    
    seccionNuevaCarpeta.style.display = 'block';
    body.style.overflow = 'hidden';
});