import { logarTempoDeExecucao } from '../decorators/index';

export abstract class View<T> {
  private elemento: Element;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  @logarTempoDeExecucao()
  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}
