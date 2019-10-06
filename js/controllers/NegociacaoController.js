class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        console.log(negociacao);
        alert("oi oi");
    }
}
