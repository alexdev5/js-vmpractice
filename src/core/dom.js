class Dom {
  constructor(selector) {
    // #app
    if (typeof selector === 'string') {
      this.$el = document.querySelector(selector);
    } else {
      this.$el = selector;
    }
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this;
    }

    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
  }

  append(node) {
    // если есть такой метод
    if (Element.prototype.append) {
      this.$el.append(node.$el);
    } else {
      // Если нет
      this.$el.appendChild(node.$el);
    }
  }
}

export function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};