import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  // Класс, который будет идти корневым классом данного блока
  static className = 'excel__formula';

  // Можно не переопределять конструктор, тогда $root доходщит сюда от класса
  // DOMListener
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }
  toHTML() {
    return `<div class="info">fx</div>
         <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }

  // Описана логика в классе DomComponent
  onInput(event) {
    console.log('Formula: onInput', event);
    console.log(this.$root);
  }
}