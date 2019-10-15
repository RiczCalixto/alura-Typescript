System.register(["./../views/MensagemView", "./../views/NegociacoesView", "./../models/Negociacoes", "./../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var MensagemView_1, NegociacoesView_1, Negociacoes_1, Negociacao_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new Negociacoes_1.Negociacoes();
                    this.negociacoesView = new NegociacoesView_1.NegociacoesView("#negociacoesView");
                    this.mensagemView = new MensagemView_1.MensagemView("#mensagemView");
                    this.inputData = document.querySelector("#data");
                    this.inputQuantidade = (document.querySelector("#quantidade"));
                    this.inputValor = document.querySelector("#valor");
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new Negociacao_1.Negociacao(new Date(this.inputData.value.replace(/-/g, ",")), Number(this.inputQuantidade.value), Number(this.inputValor.value));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.mensagemView.update("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
