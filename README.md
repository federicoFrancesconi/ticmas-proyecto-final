# Proyecto Final del Curso de Introducción al Desarrollo Web de Ticmas

## Introducción
En este repositorio se encuentra el código de una página web que consiste en un Curriculum Vitae de Federico Francesconi. La realización del mismo
es requisito para la aprobación del Curso de Introducción al Desarrollo Web de Ticmas Academy, respaldado por Argentina Programa.

## Contenido
Hay un único archivo .html (index.html), en el cual se hace referencia al resto de archivos, como la carpeta "css" con los stylesheets, la carpeta "js" con
el código de JavaScript, y la carpeta "images" con la foto de perfil y las imágenes necesarias para generar el favicon.

### HTML
En cuanto a la estructura, se buscó más que nada usar elementos semánticos. En sí es bastante simple, con una división de header, main y footer,
y dentro del main, todo el contenido separado en sections dependiendo del tema en cuestión.

### CSS
No hay mucho por decir del CSS, quizás la parte en la que menos prolijo quedó el código. Considero que podría limpiarse bastante, si bien decidí no hacerlo
para no correr el riesgo de que el proyecto no funcione faltando tan poco para la fecha límite de entrega. Fuera de eso, incluye Media Queries, y es completamente
responsivo a los distintos tamaños de pantalla. Podría haber usado Bootstrap, pero consideré más provechoso para el aprendizaje usar CSS puro.

### JavaScript
Para la interacción con el usuario, hay una opción de cambiar el modo visual de la página (oscuro o claro), mediante un botón en el nav.
JavaScript también se usa para ocultar o mostrar el menu del nav (para móviles o tablets) cuando el tamaño de la pantalla se ve modificado. Probablemente podía haberse
logrado usando Media Queries, pero para agrandar los iconos la única opción era agregando una clase (fa-2x), lo que solo podía hacer mediante JavaScript.
Además, hay un pequeño script que dispara un mensaje de alerta al completar correctamente y enviar el formulario de contacto.

## Conclusión
Aprendí bastante a lo largo del curso y agradezco que no me hayan entregado todos los saberes en bandeja, porque sino no hubiera investigado por mi cuenta,
algo que me despertó más interés de lo que creía y me permitió profundizar en temas que no imaginaba tocar a lo largo de la cursada.
