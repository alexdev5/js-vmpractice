// Abstract class
import {capitalize} from '@core/utils';

/* Класс добавляет все необходимые события */
export class DomListener {

  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`no $root provide for DomListener`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  // Инициализация события
  initDOMListener() {
    // console.log(this.listeners);
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);

      // Если метод не реализован
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`Method ${method} is not implemented in ${name}`);
      } else {
        // $this работает в forEach из за стрелочной функции
        // В js метод инстанса можно получать так:
        // this['onInput']
        // Это вызовет метод "onInput" текущего класса
        // Такое можно наблюдать во фреймворках
        this[method] = this[method].bind(this);
        this.$root.on(listener, this[method]);
      }
    });
  }

  removeDOMListener() {
    // this[method].bind(this) - ну удаляет событие так как
    // функции разные, bind создает новую функцию
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      // назначеная фукнция записана в this[method]
      // теперь ее можно легко удалить

      this.$root.off(listener, this[method]);
    });
  }
}

// Приватная функция для конкретного модуля
// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}