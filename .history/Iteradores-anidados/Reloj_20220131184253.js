for(let hora = 0; hora <= 23; hora++){
	for(let _min = 0; _min <= 59; _min++ ){
  
  let strHora = hora < 9 ? `0${hora}` : hora
  let strMin =  _min < 9 ? `0${_min}` : _min
  
  console.log(`${strHora}:${strMin}`)

  }
}