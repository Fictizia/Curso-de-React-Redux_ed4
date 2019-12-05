## CONNECTED-TODO-LIST

¡Hola chicos! Buenas tardes. Menos mal que habéis llegado, porque TENEMOS un problemilla 😥.
Resulta que he estado trasteando con nuestro **To-Do-App** y me la he cargado, ¿me ayudáis a arreglarla?

---
Os sugiero que vayáis paso a paso, `bug a bug`, para conseguir levantar la App y finalmente agregarle `Redux`.

### React
0. Instala las dependiencias de la App y lánzala, ¿recordáis cuáles eran los comandos necesarios para realizar estas dos operaciones?
* Script para instalar las Apps generadas con `Create React App`:
* Script para lanzar las Apps generadas con `Create React App`:

1. ¡¡ARRANCAMOS!! Lo primero y más importante es que creo que he borrado el `index.js`. Si os pregunta el jefe, decidle que ha sido ese becario de Murcia.
    - Lo que sí recuendo es que ese `index.js` usaba dos hojas de estilos, una llamada `reset.css` y otra `index.css`. Aunque no recuerdo exactamente para qué necesitabamos ese `reset.css`;
    ¿Te suena para qué teníamos que importarlo ahí?

2. Cuando levantéis la App, ojo, porque me estaba dando un error raro con el Header.

3. Recordad siempre que al jefe no le molan los `export default`. Yo que sé, manías.
    - ¿Por qué será que el manager tiene ese TOC?

4. `Go For It!` Al menos eso es lo que debía decir el Header.

5. Por cierto, me estaba saltando un errorcillo en Chrome, pero parece que después de todo la App tira. No sé, chorradas de React.
    - Recuerdo que había una forma de solucionarlo:
    - Lo que no sé es por qué React necesitaba que se arreglara. Vamos, que no entiendo el `Warning` del navegador.

6. No te lo vas a creer, pero no se me ven listas. NINGUNA.

7. Intento borrar las tareas. Le clicko y le clicko, pero "rien, nothing, nada".

### Redux

0. Me han pasado un esquema del paradigma de Redux, pero los graciosos del departamento me han hecho una de las suyas...
```
 _____________          _____________          _____________
|             |        |             |        |             |
|    TIENDA   |<-------|     💃      |<-------|      🙈     |
|             |        |             |        |             |
|_____________|        |_____________|        |_____________|
      |                                         |
      |        _____________          __________|__
      |       |  _________  |        |             |
      ------->| |         | |--------|    ❓💥❓   |
              | |   APP   | |        |             |
              | |_________| |        |_____________|
              |_____________|

```

    - ¿Puedes por favor actualizar el cuadro anterior? Estoy deseando imprimirlo y clavarlo en el corcho, (si consigo la contraseña de la impresora. No sé por qué me acusan de haber hecho un mal uso del escáner. Yo solo quería saber cuál era mi mejor perfil...).

1. Crea la estructura de archivos para implementar el `Global State` de tu aplicación.
    - Ten en cuenta que tu State tiene que seguir el siguiente esquema:

```
{
  lists: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  tasks: [
    {
      list: "Tuesday"
      completed: true,
      order: 0
    }
  ]
}
```

2. Recuerdo que había una forma de conectar tu App con Redux. Una especie de componente. ¿Cómo se llamaba?
    - Nombre del componente:
    - ¿De dónde lo traigo?
    - ¿Qué hago con él para que tenga una relación cercana con nuestra App?
    - No esperemos más, conéctalo, conéctalo.

3. Inicializa tu Store. Pero hazlo con clase, cada cosa en su sitio.
    - Nombre del método que inicializa el `store`:
    - ¿De dónde lo traigo?
    - ¿Qué parámetro requiere?

4. Fíjate en el esquema de mi `Global State`, ¿cuántos `Reducers` vas a necesitar?, ¿e `InitialStates`? ¿Lo ves? yo ya lo veo clarinete. Musho boilerplate.

5. En este punto ya deberías tener un `foo-initial-state.js`, (es un ejemplo, no te lo tomes literalmente) por cada key de mi `Global State` y su consiguiente Reducer, `foo-reducer.js` (insisto, menos mal que lo he llamado `foo` y no `OGT`).

6. Tenemos pensado añadir una lista nueva cuando el usuario haga `click` en el botón ese tan apañao que dice 'Create new list'. La acción que va a crear una nueva lista se llamará: `createNewList`, llamadme creativo.
Ups, pero, y si algún día quiero poder crear nuevas listas desde cualquier lado/elemento del DOM?
Vaya marrón, ya sé lo que queremos, pero, ¿dónde pongo esto?
    - ¿Dónde se ubica esa nueva función?
    - Pues ale, a declararlo.

7. Vale, quiero poder actualizar el Store con ese método, estoy seguro de que había una forma de usarlo en mi árbol de componentes.

## Actividades extra
1. Daría lo que fuera por que el `favicon.ico` representara en algo a la App.
2. El BOSS ha pedido que implementemos una nueva funcionalidad que nos permita, dentro del mismo List, carmbiar el orden de las tareas incorporando unas flechas ↑↓ (arriba y abajo) en `Task.js`.
3. Por cierto, mañana es el "due date" (Ari, eres un REPELENTE) para implementar ese componente que nos pidieron. ¿No lo recuerdas?
    - Teníamos que crear un Componente que se posicionara abajo del todo (pegado al bottom del window) (sigue con tus repelencias... 😬, meh meh, WINDOW), que muestre:
      - Las tareas que hay creadas.
      - Cuántas tareas están por completar.
      - El porcentaje de las que están completadas

    - Ahí te apañes, no nos han pasado diseños ni nada. Esta empresa tiene un futuro negro, negro.

En fin, buena noche ya...
