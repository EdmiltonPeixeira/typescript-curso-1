export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  public get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public get volume(): number {
    return this.quantidade * this.valor;
  }

  public static criaDe(
    stringData: string,
    stringQuantidade: string,
    stringValor: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(stringData.replace(exp, ","));
    const quantidade = parseInt(stringQuantidade);
    const valor = parseFloat(stringValor);
    return new Negociacao(date, quantidade, valor);
  }
}
