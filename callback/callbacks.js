const callback = () => {
  console.log("Llamando a mi callback");
};

function otraFuncion(callback) {
  console.log("Ejecutando otra funcion");
  callback();
}

console.log(callback());
console.log(otraFuncion());
