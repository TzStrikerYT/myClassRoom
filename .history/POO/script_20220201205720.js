class Persona {
  constructor(id, name, lastName, age, gender) {
    //atributos
    this.id = id;
    this.name = name;
    (this.lastName = lastName), (this.age = age), l;
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
