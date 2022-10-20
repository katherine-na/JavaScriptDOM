## Consuming data from API

## Callbacks

Una función Callback se pasa como función a otra variable y se ejecuta en algun punto de la funcion que la recibe.

## Que es programación Asíncrona en JS

Es un lenguaje de programación de un sólo subproceso o hilo, lo que significa que sólo puede ejecutar una cosa a la vez.
Normalmente, el código de un programa determinado se ejecuta directamente, y solo sucede una cosa a la vez. Si una función se basa en el resultado de otra función, tiene que esperar a que la otra función termine y regrese, y hasta que eso suceda, todo el programa se detiene esencialmente desde la perspectiva del usuario.

En el caso asícrono, algunas de las instrucciones se ejecutarán a destiempo.

```js
console.log("Primero");
setTimeout(() => {
  console.log("Segundo");
}, 10);
console.log("Tercero");
```

## Que es programación Sincrona en JS

En un modelo de programación sincrónico, las cosas suceden una a la vez. Cuando llamas a una función que realiza una acción de larga duración, solo retorna cuando la acción ha terminado y puede retornar el resultado. Esto detiene tu programa durante el tiempo que tome la acción.

Cada instrucción se ejecutará en secuencia hasta terminar.

```js
console.log("Primero");
console.log("Segundo");
console.log("Tercero");
```

### Síncrono y Asíncrono

Síncrono: La respuesta sucede en el presente, una operación síncrona esperará el resultado.  
Asíncrono: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

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

## Metodo .then()

El método `then`, se ejecuta inmediatamente después de que tu promesa se cumple con resolve

```js
myPromise.then((result) => {});
```

## Metodo .catch()

`Catch` es el método utilizado cuando tu promesa ha sido rechazada. Se ejecuta inmediatamente, después de que se llama al método reject de una promesa.

```js
myPromise.catch((error) => {});
```

## GET

Los datos pueden ser recibidos usando el método GET.

## POST

Los datos pueden ser enviados usando el método POST.

## UPDATE

Los datos son actuliazados.

## DELETE

Los datos pueden ser eliminados.
