# Установка

## Клонируете этот репозиторий и в консоли/терминале пишете команду:

npm i

# Скрипты

## Для разработки используете скрипт:

npm run start

Вы можете просмотреть сервер разработки по адресу localhost: 3000.

## Сборка для продакшена:

npm run build

## Удаление сборки продакшена:

npm run clean

# Используемые инструменты:

- Webpack
- Typescript
- Sass

# Зависимости:

## Webpack
- webpack - Сборщик модулей
- webpack-cli - Интерфейс командной строки для webpack
- webpack-dev-server - Сервер разработки для webpack
- webpack-merge - Упрощение настройки конфигурации для разработки/продакшена


## Loaders
- ts-loader - Преобразует файлы ts с в js и Webpack
- sass-loader - Загружает SCSS и компилирует в CSS
- node-sass - Библиотека, которая обеспечивает привязку Node
- css-loader - Интерпритирует @import и url()
- style-loader - Помещает CSS в DOM
- html-loader - Экспортирует HTML как строку и минимизирует, когда этого требует компилятор.
- pug - шаблонизатор Html
- pug-html-loader - преобразует pug файлы в html
## Plugins
- html-webpack-plugin - Создает HTML файлы из шаблона
- mini-css-extract-plugin - Извлекает CSS в отдельные файлы
- css-minimizer-webpack-plugin - Оптимизирует и минифицирует CSS
- imagemin-webpack-plugin - Оптимизирует изображения
- simplebar - Плагин для создания уникального скроллбара
- air-datepicker - Плагин для создания календаря
- jquery - Плагин-библиотека для правильной работы air-datepicker
- resolve-url-loader - Преобразует пути до файлов

## Linters
- eslint - Применяет руководства по стилю в приложении
- eslint-config-airbnb-base - Базовое руководство по стилю для обеспечения соблюдения правил
- eslint-plugin-import - Осуществляет правила импорта
- eslint-webpack-plugin - ESLint конфигурация для webpack
- stylelint - Инструмент для линтинга стилей, который указывает ошибки, помогает соблюдать соглашения по стилю кода и применяемым практикам
- stylelint-config-standard - Стандартное руководство по стилю для обеспечения соблюдения правил
- stylelint-webpack-plugin - stylelint конфигурация для webpack
