---
sidebar_position: 2
---

# Автокоплит

[Фигма](https://www.figma.com/file/jw2MVIw6NwxsSBo3gM5wUd/%E2%9C%85%F0%9F%90%B3%F0%9F%92%99UI-KIT-%E2%80%93-WEB?node-id=9034%3A60478&t=Mm7J2fna6MwSd0Ni-1) | [Storybook](https://psb.mihailshamin.ru/assets/images/storybook-30203c6f3f598721dd183c1dfe1adf72.png) | [Бэклог](https://github.com/metz-hei/psb/labels/autocomplete)

## Когда использовать

Автокомплит используют:

* для выбора значения из справочника,
* для добавления своего значения в справочник.

Используйте автокомплит, если значений в справочнике слишком много, чтобы искать их глазами. Если значений не больше 25, можно использовать [раскрывающийся список](https://docusaurus.new) или [группу радиокнопок](https://docusaurus.new).

Комбобокс может работать в двух режимах — обычном и в режиме автокомплита. Основное их отличие в том, что в режиме автокомплита список вариантов появляется только после ввода первого символа или изменении уже введенного значения.

Условия показа результатов поиска зависят от конкретного кейса. 
- Если мы ищем город, то целесообразно показать список городов сразу, в алфавитном порядке. Чтобы пользователь имел возможность выбора взаимодействия: скролл/выбор или поиск/выбор. Во время поиска список будет уточняться при введении каждого символа.
- Если используются различные источники данных, мы можем показывать только найденные результаты. При этом, кол-во символов необходимых для поиска зависит от технических условий: поиск по контрагентам позволяет показывать результат от 1 символа, а Open Data от 5.

### Виды полей

![](./img/var.jpg)

## Описание работы

### Выпадающий автокомплит

**Состояние по умолчанию**

Плейсхолдер подсказывает, что в поле можно ввести свое значение или выбрать его из списка вручную:

![](./img/start.jpg)


**Фокус по пустому полю**

При получении фокуса фон поля и его название меняют свой цвет, открывается список из 5-7 вариантов.

Когда курсор находится над списком, скроллинг страницы блокируется.

![](./img/start2.jpg)


**Начало ввода**

При вводе первого символа список фильтруется. Первый пункт в списке подсвечивается:

![](./img/start3.jpg)

**Выбор пункта из списка**

Выбор значения может быть сделан двумя способами — при управлении с клавиатуры и мышью.

При выборе значения мышью или клавишей Enter список закрывается, фокус остается в поле. Список будет показан снова при следующем клике в поле или изменении значения.

![](./img/start4.jpg)

**Фокус по заполненному полю**

При получении фокуса раскрывается список, прокрученный до выбранного значения:

![](./img/start5.jpg)

**Нет совпадений**

Если в справочнике не найдено совпадений с введенным значением, автокомплит показывает соответствующий текст. Важно показать подсказку, чтобы пользователь понял, что поле обработало его запрос.

![](./img/start6.jpg)

В этом состоянии, при нажатии на клавиатуре Enter ничего не происходит, фокус остается в поле.