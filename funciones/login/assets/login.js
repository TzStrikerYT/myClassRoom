let jsonBD = [
  {
    username: "striker",
    password: "123456",
  },
];

function login() {

  let username = document.getElementById('username').value
  let password = document.getElementById('password').value

  console.log(btoa(password))

  if (!username || !password) {
    document.getElementById('password').value = ""
    alert("Usuario o contraseña no estan diligenciados")
    return
  }

  if(password.length > 8){
    document.getElementById('password').value = ""
    alert('La contraseña es demasiado larga')
    return
  }

  for (let i in jsonBD) {
    if (jsonBD[i].username === username) {
      if (jsonBD[i].password === password) {
        alert(`Login correcto, bienvenido`)
        return
      } else {
        document.getElementById('password').value = ""
        alert(`La contraseña es incorrecta`)
        return
      }
    }
  }

  document.getElementById('password').value = ""
  alert(`el usuario no existe`)
  return
}

