var Conta = /** @class */ (function () {
    function Conta(numero, saldo, dono) {
        this._num_conta = numero;
        this.saldo = saldo;
        this._titular = dono;
    }
    Conta.prototype.mostrarInformacoes = function () {
        var informacoes = "";
        informacoes += "----CONTA----";
        informacoes += "\nN\u00FAmero da conta: ".concat(this._num_conta);
        informacoes += "\nSaldo: R$ ".concat(this.saldo);
        informacoes += "\nTitular: ".concat(this._titular);
        console.log(informacoes);
    };
    Conta.prototype.depositar = function (valor) {
        var valor_saldo = this.saldo;
        var novo_valor = valor_saldo + valor;
        this.saldo = novo_valor;
        console.log("Novo saldo: R$ ".concat(this.saldo));
    };
    Conta.prototype.debitar = function (valor) {
        var valor_saldo = this.saldo;
        if (valor_saldo > 0) {
            if (valor < valor_saldo) {
                var novo_valor = valor_saldo - valor;
                this.saldo = novo_valor;
                console.log("Novo saldo: R$ ".concat(this.saldo));
            }
        }
        else {
            console.log("N\u00E3o \u00E9 permitido fazer o d\u00E9bito pois o valor \u00E9 in");
        }
    };
    Object.defineProperty(Conta.prototype, "getsaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
var conta1 = new Conta('123', 20, 'Joao');
conta1.mostrarInformacoes();
conta1.depositar(20);
conta1.debitar(5);
console.log(conta1.getsaldo);
