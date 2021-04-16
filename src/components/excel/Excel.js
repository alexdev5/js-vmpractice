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

    // Преопределяем масиив компонентов, теперь в них содержится инстанс
    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);
      $el.html(component.toHTML());
      $root.append($el);
      // DEBUG
      if (component.name) {
        window['c'+ component.name] = component;
      }
      //

      return component;
    });
    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
    // Запустим обработчик событий для компонентов
    this.components.forEach(component => component.init());
  }
}
