class Dom {
  constructor(selector) {
    this.__events = [];
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
    if (node instanceof Dom) {
      node = node.$el;
    }
    // если есть такой метод
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      // Если нет
      this.$el.appendChild(node);
    }
  }

  on(event, callback) {
    this.$el.addEventListener(event, callback);
  }

  off(event, callback) {
    this.$el.removeEventListener(event, callback);
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