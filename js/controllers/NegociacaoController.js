class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = (document.querySelector("#quantidade"));
        this.inputValor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), Number(this.inputQuantidade.value), Number(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoes.paraArray().map(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
    }
}
