function eh_par(valor) {
    return valor % 2 == 0;
}
function eh_primo(valor) {
    for (var i = 2; i < valor - 1; i++) {
        if (!eh_divisivel(valor, i)) {
            return true;
        }
        return false;
    }
    function eh_divisivel(valor, divisor) {
        return valor % divisor == 0;
    }
}
function mostrar_nome(nome, tratamento) {
    if (tratamento === void 0) { tratamento = 'Sr.'; }
    return "".concat(tratamento, " ").concat(nome);
}
function mostrar_vetor_sep_traco(item) {
    var string = '';
    string += item + '-';
    console.log(string);
}
function soma(x, y) {
    return x + y;
}
function exibir() {
    var valores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        valores[_i] = arguments[_i];
    }
    var valor;
    /*for (let index = 0; index < valores.length; index++) {
        //console.log(valores[index])
        valor += valores[index]
    }*/
    //console.log(valores)
    //return valores
    for (var _a = 0, valores_1 = valores; _a < valores_1.length; _a++) {
        var item = valores_1[_a];
        valor += item;
    }
    return valor;
    //return item
}
var ola = function () { return console.log('Olá'); };
var filtrar_pares = function (vetor) { return vetor.filter(function (item) { return item % 2 == 0; }); };
var dobrar_valores = function (vetor) { return vetor.map(function (vetor) { return vetor * 2; }); };
var somatorio_array = function (vetor) { return vetor.reduce(function (atual, total) { return atual + total; }); };
console.log(eh_par(4));
console.log(eh_par(3));
console.log();
console.log(eh_primo(37));
console.log(eh_primo(40));
console.log('');
console.log(mostrar_nome('Joao'));
console.log();
var vetor1 = [3, 2, 5, 6];
//const vetor_de_traco = vetor.forEach(mostrar_vetor_sep_traco)
console.log(vetor1.forEach(function (item) { return console.log(item + '-'); }));
console.log(soma(1, 2));
console.log(soma(1, '2'));
console.log(soma(1));
console.log();
console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));
ola();
console.log();
console.log(filtrar_pares(vetor1));
console.log(dobrar_valores(vetor1));
console.log(somatorio_array(vetor1));
