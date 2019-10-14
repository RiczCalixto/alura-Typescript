class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = (document.querySelector("#quantidade"));
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), Number(this.inputQuantidade.value), Number(this.inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
    }
}
