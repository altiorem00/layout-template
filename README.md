# Шаблон для многостраничной вёрстки на основе [TARS-CLI](https://github.com/tars/tars-cli)

## Основные фичи

* Bootstrap 5
* Шаблонизатор Handlebars
* SVG-спрайты
* Препроцессор SCSS
* Миксины для шрифтов
* Компонентная вёрстка по БЭМ

## Установленные плагины \ библиотеки

* swiper
* Bootstrap 5
* fslightbox
* inputmask
* slimselect
* ymaps

## Установка

Необходимо [установить `Node.js`](http://nodejs.org/) версии >= 4.x.x Если вы используете Node.js версии 5.x.x, убедитесь, что вы используете npm версии 3.x.x и выше. В противном случае обновите npm:

```bash
npm i -g npm
```

Для корректной работы необходимо установить TARS-CLI глобально:

```bash
npm i -g tars-cli
```

Клонируем репозиторий.

```shell
git clone https://github.com/altiorem00/layout-template.git
```

Затем устанавливаем зависимости.

```shell
npm i
```

Все готово, можно колбасить :)


## Основные команды

Запускает dev-режим сборки:

```bash
tars dev --lr
```

Запускает build-режим сборки:

```bash
tars build -m
```

Обновляет TARS-CLI:

```bash
tars update
```

