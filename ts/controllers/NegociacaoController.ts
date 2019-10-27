import { MensagemView } from "./../views/MensagemView";
import { NegociacoesView } from "./../views/NegociacoesView";
import { Negociacoes } from "./../models/Negociacoes";
import { Negociacao } from "./../models/Negociacao";
import { logarTempoDeExecucao } from '../decorators/index';

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");
  

  constructor() {
    this.inputData = <HTMLInputElement>document.querySelector("#data");
    this.inputQuantidade = <HTMLInputElement>(
      document.querySelector("#quantidade")
    );
    this.inputValor = <HTMLInputElement>document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }
  @logarTempoDeExecucao()
  adiciona(event: Event) {
    event.preventDefault();

    const negociacao = new Negociacao(
      new Date(this.inputData.value.replace(/-/g, ",")),
      Number(this.inputQuantidade.value),
      Number(this.inputValor.value)
    );
    this.negociacoes.adiciona(negociacao);

    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }
}
