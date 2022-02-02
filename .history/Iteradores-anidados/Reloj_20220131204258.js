// for (let hora = 0; hora <= 23; hora++) {
//   for (let _min = 0; _min <= 59; _min++) {

//     let strHora = hora < 10 ? `0${hora}` : hora;
//     let strMin = _min < 10 ? `0${_min}` : _min;

//     console.log(`${strHora}:${strMin}`);
//   }
// }

for (let hora = 0; hora <= 23; hora++) {
  for (let min = 0; min <= 59; min++) {
    //imprimir la hora
    let txtHora = "";
    let txtMin = "";

    if (hora < 10) txtHora = `0${hora}`;
    else txtHora = `${hora}`;

    if (min < 10) txtMin = `0${min}`;
    else txtMin = `${min}`;

    console.log(`${txtHora}:${txtMin}`);
  }
}
