class Sistema {
  constructor() {
    this.personas = [
      new Persona("Pedro", 20, "Uruguayo"),
      new Persona("Martina", 15, "Argentina"),
    ];
  }
  crearPersona(objPersona) {
    this.personas.push(objPersona);
  }
}
