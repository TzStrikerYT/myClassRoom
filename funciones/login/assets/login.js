let jsonBD = [
  {
    username: "striker",
    password: "123456",
  },
];

function login(username, password) {
  if (!username || !password) {
    return "Usuario o contraseña no estan diligenciados";
  }

  for (let i in jsonBD) {
    if (jsonBD[i].username === username) {
      if (jsonBD[i].password === password) {
        return `Login correcto, bienvenido`;
      } else {
        return `La contraseña es incorrecta`;
      }
    }
  }

  return `el usuario no existe`;
}

let respuesta = login("striker", "123456");

console.log(respuesta);
