__Gulp / WebPack: сборка @M.A.N.__<br>
    - запуск в режиме разработчика;  
    - запуск в режиме prodaction;  
    - запуск в режиме создания SVG-Sprite;  
    - создание архива собранной папки проекта для production;  
    - выгрузка файлов на хостингн по ftp;  

__Команды запуска:__  
    __npm run dev__ - сборка в режиме разработки;  
    __npm run build__ - сборка в режиме prodaction;  
    __npm run svgSprite__ - для формирования фала svg спрайтов;  
    __npm run zip__ - создание архива папки проекта для production;  
    __npm run deploy__ - копирование проекта на хостинг по ftp;  

__Особенности:__<br>
    @img/ - прописываем в тегах изображений для построения правильных путей к файлам;

    Для тех кто будет использовать сборку на Linux. Используйте alexovn/gulp-fonter вместо Mazgrze/gulp-fonter. Там исправлен баг с путями. npm install -D github  alexovn/gulp-fonter.

    У кого будет создаваться околесица из шрифтов после написания: вам нужно установить не gulp-fonter, а gulp-fonter-fix

    Если актуально, открываем node_modules/gulp-fonter/dist/index.js, находим строку:
    newFont.path = source.dirname + '\\' + source.stem + '.' + type;
    , меняем '\\' на '/', и должно заработать.

    плагин gulp-avif-webp-html