var TestaRetangulo = /** @class */ (function () {
    function TestaRetangulo() {
        this.l1 = 0;
        this.l2 = 0;
    }
    TestaRetangulo.prototype.calcularArea = function () {
        return this.l1 * this.l2;
    };
    TestaRetangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.l1 + this.l2);
    };
    TestaRetangulo.prototype.exibirValorPerimetro = function () {
        console.log("O valor do per\u00EDmetro \u00E9: ".concat(this.calcularPerimetro()));
    };
    return TestaRetangulo;
}());
/*let r1 = new TestaRetangulo()
r1.l1 = 4
r1.l2 = 5

console.log(r1.calcularArea())
console.log(r1.calcularPerimetro())
*/
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
    }
    Circulo.prototype.calcularArea = function () {
        return 3.14 * (Math.pow(this.raio, 2));
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * 3.14 * this.raio;
    };
    return Circulo;
}());
var c1 = new Circulo();
c1.raio = 8;
console.log(c1.calcularArea());
console.log(c1.calcularPerimetro());
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinanceira.prototype.saldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var conta = new SituacaoFinanceira();
conta.valorDebitos = 20;
conta.valorCreditos = 70;
console.log(conta.saldo());
