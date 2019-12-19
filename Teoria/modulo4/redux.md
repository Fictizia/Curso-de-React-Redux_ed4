# Redux

![flow](https://lh3.googleusercontent.com/hZMEawSr6736ErYknlvaLJ3wviZ_4rut-G8y-YJeeUjTnhvz1ouhNTztMYtukma0fsLUAh2KCWXW5A=s600)

Os dejo por [aquí](https://es.slideshare.net/SergioZamarroSnchez/redux-reactadalab) unas diapositivas orientativas del gran Sergio Zamarro.

## Ejercicios:

Se trata de hacer un ejercicio final donde podamos practicar todo o casi todo lo que hemos visto. He preparado varias APIs para ayudarnos. El objetivo es hacer una especie de Instagram donde usemos React, Redux, react-form-hook, react-router, etc. El estilo de la página es lo menos importante, pero vamos a hacerla con cariño:

1. La primera página al entrar debe ser un formulario de login. Para avanzar a la siguiente pantalla (/posts) debe introducir como datos:
    * username: react
    * password: fictizia

2. La página /posts va a tirar de la API: http://www.mocky.io/v2/5db348a0300000650057b5e3
    * Pintar los posts y quien lo ha publicado
    * Mostrar los likes
    * Poder dar like a una foto y que aumente el marcador
    * Mostrar los comentarios y el usuario que lo ha publicado

3. Página de mi perfil (/account)
    * En esta página vamos a mostrar los datos con los que iniciamos sesión

4. Página de perfil de usuario (/profile/:id) va a tirar de la API: http://www.mocky.io/v2/5db34985300000650057b5e8
    * Mostrar los datos que devuelve la API


A continuación, el índice de tareas a realizar entre todos:

0. Entramos en el siguiente enlace de CodeSandbox: 
1. Crear el índice.
2. Crear el Router.
3. Crear toda la estructura de Redux.
    - store.js 
    - reducers.js
    - carpeta state
    - carpeta dentro de la carpeta state que represente un reducer.
    - Provider
4. Pensar el sub-árbol de componentes para App y sus estilos.
5. Crear el sub-árbol de componentes para la Main Page y sus estilos.
6. Crear el sub-árbol de componentes para `/account` y sus estilos.
7. Crear el sub-árbol de componentes para `/profile/:id` y sus estilos.

[<- Volver al índice](./../README.md)
