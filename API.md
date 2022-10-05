## Consuming data from API

## Que es programación Asíncrona en JS

Es un lenguaje de programación de un sólo subproceso o hilo, lo que significa que sólo puede ejecutar una cosa a la vez.
Normalmente, el código de un programa determinado se ejecuta directamente, y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario.

## Que es programación Sincrona en JS

En un modelo de programación sincrónico, las cosas suceden una a la vez. Cuando llamas a una función que realiza una acción de larga duración, solo retorna cuando la acción ha terminado y puede retornar el resultado. Esto detiene tu programa durante el tiempo que tome la acción.

### Síncrono y Asíncrono

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.  
Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

## Que es un callback en JS

Los callbacks en JavaScript representan el uso de funciones como parámetros de otras funciones.

## Que es es una promesa en JS?

Una promesa se utiliza para hacer una promesa de que harás algo, habitualmente de forma asíncrona. Cuando la tarea se completa, o se cumpla tu promesa o no se cumpla. `Promise` es una función constructora, así que tu necesitas usar la palabra clave `new` para crear una. Recibe una función como su argumento, con dos parámetros: `resolve` y `reject`. Estos métodos se utilizan para determinar el resultado de la promesa. Su sintaxis se ve así:

```js
const myPromise = new Promise((resolve, reject) => {});
```

Una promesa tiene tres estados: `pending`, `fulfilled`, y `rejected`.

`resolve` se utiliza cuando quieres que tu promesa tenga éxito, y `reject` se usa cuando quieres que falle. Estos son métodos que toman un argumento, como se ve a continuación.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

El método `then`, se ejecuta inmediatamente después de que tu promesa se cumple con resolve

```js
myPromise.then((result) => {});
```

`Catch` es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método reject de una promesa.

```js
myPromise.catch((error) => {});
```
