const path = require('path');

module.exports = {
  // Директория исходников
  context: path.resolve(__dirname, 'src'),
  mode: "development",
  // Входная точка для приложения (объект/строка)
  entry: './index.js',
  // (объект)
  output:{
    // будущий файл, который будет подключаться в браузер
    filename: "bundle.js",
    // строчка с абсолютным путем
    path: path.resolve(__dirname, 'dist'),
  }
};