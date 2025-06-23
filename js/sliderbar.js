
  function mostrarSeccion(id) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.style.display = 'none');

    // Muestra la que corresponde
    document.getElementById(id).style.display = 'block';

    // Quita clase activa de todos los <li>
    const items = document.querySelectorAll('.sidebar ul li');
    items.forEach(item => item.classList.remove('active'));

    // Marca como activo el <li> que llamó a la función
    event.target.closest('li').classList.add('active');
  }

