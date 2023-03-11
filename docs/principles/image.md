# Подготовка изображений к передаче в разработку

## Как выбрать формат?
Если у картинки нет фона или фон задан цветом или градиентом, то картинку следует экспортировать в формате png.

Если картинка имеет свой фон, то — jpg.

## Кроп или не кроп?
Если часть картинки обрезается, то экспортировать следует обрезанную версию. Если не обрезается, то полную.

## Какие размеры нужны?
Веб: @1x, @2x
iOS: @1x, @2x, @3x
Android: @1x, @1.5x, @2x, @3x, @4x

## Каким должно быть название файла?
Убедитесь, что все картинки имеют английские названия, набранные в стиле CamelCase и содержат указания размера. Например, RunTogether@2x.png

Название должно кратко передавать суть изображения, например, если вы размещаете фотографию отделения банка находящегося по адресу Москва, Стромынка, 18с27, то название изображения должно быть таким: PSBBranchStromynkaStreet18/27.jpg

Если изображение абстрактное, то называть его следует по смыслу того, что на нём изображено или по смыслу блока, к которому оно относится. Например, если у вас есть изображение, которое сопровождает посадочную страницу о вкладе «Сильная ставка», то название изображения может быть таким: StrongRateDeposit8,2.jpg

## Как оптимизировать загрузку картинок?
Все изображения нужно прогнать через ImageOptim, Optimage, TinyPNG: они умело оптимизируют и чистят джипеги, ПНГ и даже СВГ. Ориентировочный максимальный вес картинки — 400 Кб.

## Поисковая оптимизация изображений
У тега img есть два ключевых атрибута, влияющих на поисковую оптимизацию — alt
 и title.

Если изображения абстрактные, то эти атрибуты можно не заполнять. 

Если это фотографии какого-то события в банке или какие-то осмысленные изображения, например, скриншот инвестиционного терминала, то заполнение обоих атрибутов обязательно.

Атрибут alt — это альтернативный источник информации для пользователей, у которых показ изображений в браузере отключён. Если атрибут alt определен, то, когда показать картинку будет невозможно, на ее месте отобразится текст атрибута.

Атрибут title предоставляет дополнительную информацию о картинке. Текст, заключенный в этом атрибуте, появляется при наведении курсора на картинку.

