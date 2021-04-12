import {$} from '@core/dom';

export class Excel {
  constructor(selector, option) {
    // Нужно выбирать сразу через фреймворк,
    this.$el = $(selector);
    this.components = option.components || [];
  }

  // Возвращает корневую ноду для экселя
  getRoot() {

    const $root = $.create('div', 'excel');

    this.components.forEach(Component => {
      const $el = $.create('div', Component.className);

      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      // $root.insertAdjacentHTML('afterbegin', );
    });

    return $root;
  }

  render() {
    // afterbegin, afterend beforeend beforebegin
    // this.$el.insertAdjacentHTML('afterbegin', `<h1></h1>`);
    this.$el.append(this.getRoot());
  }
}
