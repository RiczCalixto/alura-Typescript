var Views;
(function (Views) {
    class View {
        constructor(seletor) {
            this.elemento = document.querySelector(seletor);
        }
        update(model) {
            this.elemento.innerHTML = this.template(model);
        }
    }
    Views.View = View;
})(Views || (Views = {}));
