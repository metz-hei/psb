# Как присоединиться к команде паттернов

1. Завести аккаунт [на Гитхаб](https://github.com/)
2. Скачать и установить [VS Code](https://code.visualstudio.com/)
3. Скачать и установить [Node](https://nodejs.org/en/download/prebuilt-installer)
4. Скачать и установить git:
   - если вы [на маке](https://developer.apple.com/xcode/), то git встроен в Xcode
   - если вы [на винде](https://git-scm.com/downloads/win)
5. Открыть VS Code и склонировать проект на свой компьютер: ```git clone https://github.com/metz-hei/psb.git```
6. Изменить директорию терминала на psb: ```cd psb```
7. Установить зависимости: ```npm i```
8. Запустить проект: ```npm run start```

## Проект не запускается

Если у вас уже был развёрнут проект и он перестал запускаться после очередного обновления, то попробуйте почистить кэш:

- выполнить команду `npm cache clean --force`,
- удалить папку node_modules,
- удалить файл package-lock.json,
- установить зависимости `npm i`,
- запустить проект `npm start`.
