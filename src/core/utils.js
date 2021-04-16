// Консепт называется "pure function"
// Функции не взаимодействуют изолированы
// от основного кода, они чисто возвращиют результат
export function capitalize(str) {
  // Что бы точно знать что возвращается строка
  if (typeof str !== 'string') {
    return '';
  }

  return str.charAt(0).toUpperCase() + str.substr(1);
}