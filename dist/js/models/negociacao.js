export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criaDe(stringData, stringQuantidade, stringValor) {
        const exp = /-/g;
        const date = new Date(stringData.replace(exp, ","));
        const quantidade = parseInt(stringQuantidade);
        const valor = parseFloat(stringValor);
        return new Negociacao(date, quantidade, valor);
    }
}
