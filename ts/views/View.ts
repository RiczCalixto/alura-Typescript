class View<T> {
  protected elemento: Element;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw new Error("Deve-se implementar o método template");
  }
}
