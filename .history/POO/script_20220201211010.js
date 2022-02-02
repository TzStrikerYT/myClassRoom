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


let cliente = new Persona('el id', 'el nomnbre', 'el apellido', 'la edad', 'elgenero')

cliente.presentarse()