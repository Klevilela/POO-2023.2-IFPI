class Pessoa {
    constructor(name, age) {
        this.nome = name;
        this.idade = age;
    }
    show_name() {
        console.log(`Nome da pessoa é ${this.nome}`);
    }
}
const p1 = new Pessoa('Joao', 20);
p1.nome = 'Paulo';
p1.show_name();
//# sourceMappingURL=teste.js.map