'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  //файл где прописываются все зависимости
  entry: './js/script.js',
  //файл выхода
  output: {
    filename: 'bundle.js',
	// __dirname - позволяет получать корень папки
    path: __dirname + '/js'
  },
  //watch - отслеживает наши файлы, true - автоматически собирает файлы когда меняем (можно настроить)
  watch: true,

  //хранит исходники
  devtool: "source-map",

  //модули и их настройка
  module: {}
};
