function promesa() {
  let prom = new Promise(function x(resolve, reject) {
    let condicion = true;

    if (condicion) {
      resolve(`Resuelta`);
    } else {
      reject(`rechazada`);
    }
  });

  return prom;
}

console.log(
  promesa()
  .then(function a(data) {
    return data;
  })
  .catch(function b(err){
      return err
  })
);
