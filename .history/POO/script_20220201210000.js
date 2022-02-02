class Persona {
  constructor(id, name, lastName, age, gender) {
    //atributos
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  //metodos
  presentarse() {
    console.log(`
            Hola mi nombre es ${this.name} ${this.lastName}, soy de genero ${this.gender}
            mi documento es ${this.id}
            y mi edad es ${this.age}
        `);
  }
}


let cliente = new Persona()

cliente.id = '1019156123'
cliente.name = 'Maria'
cliente.lastName = 'la del Barrio'
cliente.gender = 'Femenino'
cliente.age = 50