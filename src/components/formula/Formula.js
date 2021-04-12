import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  // Класс, который будет идти корневым классом данного блока
  static className = 'excel__formula';

  toHTML() {
    return `<div class="info">fx</div>
         <div class="input" contenteditable="true" spellcheck="false"></div>`;
  }
}