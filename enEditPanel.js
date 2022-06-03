let version = 'v 3.0.2';
$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" />');

let url = document.URL; // Получаем адрес страницы редактирования
let Penalty = url.indexOf('penalty'); // Страница со штрафными подсказками
let PromptEdit = url.indexOf('PromptEdit');
let TaskEdit = url.indexOf('TaskEdit'); // Основное задание
let BonusEdit = url.indexOf('BonusEdit'); // Бонусное задание

if (Penalty > 10) { // Устанавливаем доступ к Textarea для отдельных страниц
    let textareaNum = '1'; // Выбираем текстовое поле
    let elementNum = '32'; // Место положения панели
} else if (PromptEdit > 5) {
    let elementNum = '27';
    let textareaNum = '0';
} else if (TaskEdit > 5) {
    let elementNum = '18';
    let textareaNum = '0';
} else if (BonusEdit > 5) {
    let elementNum = '14';
};

    $('textarea:eq(0)').focus (function() { // Изменяем номер текстового поля при фокусе
        function textar() {textareaNum = 0};
        textar();
    });

        $('textarea:eq(1)').focus (function() { // Изменяем номер текстового поля при фокусе
            function textar() {textareaNum = 1};
            textar();
        });



// функция вставки текста в положении курсора
function insertAtCaret(text) {
    let txtarea = document.getElementsByTagName("textarea")[textareaNum];
    if (!txtarea) { return; }
    let scrollPos = txtarea.scrollTop;
    let strPos = 0;
    let br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false ) );
    if (br == "ie") {
        txtarea.focus();
        let range = document.selection.createRange();
        range.moveStart ('character', -txtarea.value.length);
        strPos = range.text.length;
    } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    }
    let front = (txtarea.value).substring(0, strPos);
    let back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        let ieRange = document.selection.createRange();
        ieRange.moveStart ('character', -txtarea.value.length);
        ieRange.moveStart ('character', strPos);
        ieRange.moveEnd ('character', 0);
        ieRange.select();
    } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;
}
// функция вставки текста в положении курсора

// Кнопки панели

let br = "<div id='brId' type='button' class='stylebuttonico' title='Тег переноса строки'><i class='fas fa-level-down-alt'></i></div>"; // Перенос строки
let bold = "<div id='boldId' type='button' class='stylebuttonico' title='Жирный текст'><i class='fas fa-bold'></i></div>"; // Жирный текст
let yellowI = "<div id='yellowId' type='button' class='stylebuttonico' title='Желтый текст курсивом'><i class='fas fa-italic'></i></div>"; // Желтый наклонный текст
let del = "<div id='delId' type='button' class='stylebuttonico' title='Зачеркнутый текст'><i class='fas fa-strikethrough'></i></div>"; // Зачеркнутый текст
let urlButton = "<div id='urlId' type='button' class='stylebuttonico' title='Ссылка'><i class='fas fa-sign-out-alt'></i></div>"; // Ссылка


let center = "<div id='centerId' type='button' class='stylebuttonico' title='Выравнивание по центру'><i class='fas fa-align-center'></i></div>"; // Выравнивание по центру
let right = "<div id='rightId' type='button' class='stylebuttonico' title='Выравнивание по правому краю'><i class='fas fa-align-right'></i></div>"; // Выравнивание по правому краю
let justify = "<div id='justifyId' type='button' class='stylebuttonico' title='Выравнивание по ширине'><i class='fas fa-align-justify'></i></div>"; // Выравнивание по ширине
let detalis = "<div id='detalisId' type='button' class='stylebuttonico' title='Спойлер'><i class='fas fa-angle-double-down'></i></div>"; // Спойлер
let quote = "<div id='quoteId' type='button' class='stylebuttonico' title='Цитирование с разделителями'><i class='fas fa-quote-left'></i></div>"; // Цитирование с разделителями

let image = "<div id='imageId' type='button' class='stylebuttonico' title='Ссылка на изображение с миниатюрой'><i class='far fa-images'></i></div>"; // Вставка картинки с уменшением
let imageFull = "<div id='imageFullId' type='button' class='stylebuttonico' title='Ссылка на изображение'><i class='fas fa-image'></i></div>"; // Вставка картинки
let video = "<div id='videoId' type='button' class='stylebuttonico' title='Теги для вставки видео'><i class='fas fa-video'></i></div>"; // Вставка видео
let audio = "<div id='audioId' type='button' class='stylebuttonico' title='Теги для вставки аудио'><i class='fas fa-music'></i></div>"; // Вставка аудио
let red = "<div id='redId' type='button' class='stylebuttonico' title='Красный, предупредительный текст'><i class='fas fa-exclamation-triangle'></i></div>"; // Красный текст - ВНИМАНИЕ!
let coordinates = "<div id='coordinatesId' type='button' class='stylebuttonico' title='Координаты'><i class='fas fa-map-marker-alt'></i></div>"; // Скрипт координат

let fo = "<div id='foId' type='button' class='stylebutton' title='Форма ответа'>ФО</div>"; // Форма Ответа
let example = "<div id='exampleId' type='button' class='stylebutton' title='Пример ответа'>Пример</div>"; // Пример ответа

// Кнопки с цветными шрифтами, для квеста
let qLime = "<div id='qLimeId' type='button' class='stylebutton' title='Лайм'><span style='color: #00FF00'>#</span></div>";
let qRed = "<div id='qRedId' type='button' class='stylebutton' title='Красный'><span style='color: #FF0000'>#</span></div>";
let qYellow = "<div id='qYellowId' type='button' class='stylebutton' title='Желтый'><span style='color: #FFFF00'>#</span></div>";
let qOrange = "<div id='qOrangeId' type='button' class='stylebutton' title='Оранжевый'><span style='color: #FFA500'>#</span></div>";
let qBlue = "<div id='qBlueId' type='button' class='stylebutton' title='Синий'><span style='color: #0000FF'>#</span></div>";
let qPurple = "<div id='qPurpleId' type='button' class='stylebutton' title='Пурпурный'><span style='color: #800080'>#</span></div>";
let qFuchsia = "<div id='qFuchsiaId' type='button' class='stylebutton' title='Розовый'><span style='color: #FF00FF'>#</span></div>";
let qAqua = "<div id='qAquaId' type='button' class='stylebutton' title='Аква'><span style='color: #00FFFF'>#</span></div>";
// Кнопки с цветными шрифтами, для квеста

let author = "<div id='authorId' type='button' class='stylebuttonico' title='Info'><i class='fas fa-info'></i></div>";

// Кнопки панели
// функция вставки текста в положении курсора

let element = document.getElementsByTagName('td')[elementNum];
let buttonPanel = document.createElement('div');
buttonPanel.id = 'buttonPanel';
buttonPanel.innerHTML = br+bold+yellowI+del+urlButton+center+right+justify+detalis+quote+image+imageFull+video+audio+red+coordinates+fo+example+qLime+qRed+qYellow+qOrange+qBlue+qPurple+qFuchsia+qAqua+author;
element.appendChild(buttonPanel);

$('div.stylebutton').css(
    {'padding': '0px 7px 0px 7px',
     'min-width': '13px',
     'height': '27px',
     'border': '1px solid #1B7C1F',
     'color': '#04FC3E',
     'float': 'left',
     'cursor': 'pointer',
     'fontSize': '13px',
     'line-height': '27px'
    }
);

$('div.stylebuttonico').css(
    {'padding': '4px 7px 0px 7px',
     'height': '23px',
     'border': '1px solid #1B7C1F',
     'color': '#04FC3E',
     'float': 'left',
     'cursor': 'pointer',
     'fontSize': '18px',
     'line-height': '27px'
    }
);

brId.onclick = function() {
    insertAtCaret("<br>");
};

boldId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<b>' + selectedText + '</b>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<b> ТЕКСТ </b>");
        }
    }
};

yellowId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<i style=color:yellow;>' + selectedText + '</i>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<i style=color:yellow;> ТЕКСТ </i>");
        }
    }
};

delId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<del>' + selectedText + '</del>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<del> ТЕКСТ </del>");
        }
    }
};

urlId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<a href="' + selectedText + '"> ТЕКСТ </a>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<a href=\"ССЫЛКА\"> ТЕКСТ </a>");
        }
    }
};

centerId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<p style=\"color:yellow; text-align: center;\">' + selectedText + '</p>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<p style=\"color:yellow; text-align: center;\"> ТЕКСТ </p>");
        }
    }
};

rightId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<p style=\"color:yellow; text-align: right;\">' + selectedText + '</p>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<p style=\"color:yellow; text-align: right;\" > ТЕКСТ </p>");
        }
    }
};

justifyId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<p style=\"color:yellow; text-align: right;\">' + selectedText + '</p>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<p style=\"color:yellow; text-align: justify;\" > ТЕКСТ </p>");
        }
    }
};

detalisId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos);
        let styleDetails = "<style>summary {color: yellow; border: none; text-decoration: none; outline: 0px; font-weight: bold;cursor: pointer; margin: 8px 0px 8px -17px;} details {margin: 0px 0px 0px 17px;}</style>";

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += styleDetails + '\n\n<details><summary> ЗАГОЛОВОК </summary>' + selectedText + '</details>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret(styleDetails + "\n\n<details><summary> ЗАГОЛОВОК </summary> ТЕКСТ ТЕКСТ ТЕКСТ </details>");
        }
    }
};

quoteId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<hr><blockquote>' + selectedText + ' </blockquote><hr>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<hr><blockquote> Текст цитаты </blockquote><hr>");
        }
    }
};

imageId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<a href="' + selectedText + '" target=\"_blank\"><img style=\"width: 40%; height=40%\" src="' + selectedText + '"></a>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<a href=\" ССЫЛКА НА КАРТИНКУ \" target=\"_blank\"><img style=\"width: 40%; height=40%\" src=\" ССЫЛКА НА КАРТИНКУ \"></a>");
        }
    }
};

imageFullId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<img src="' + selectedText + '">';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<img src=\" ССЫЛКА НА КАРТИНКУ \">");
        }
    }
};

redId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<p style=color:red;><b>ВНИМАНИЕ!</b>' + selectedText + '</p>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<p style=color:red;><b>ВНИМАНИЕ!</b> ТЕКСТ </p>");
        }
    }
};


videoId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += `<p style="text-align: justify"><span style="color: #FF9933"><b>Название</b></span>
<video width="640" height="360" src="` + selectedText + `" controls autobuffer>

<p>Если видео не воспроизводится, скачайте его по ссылке: <a href="` + selectedText + `">Download</a> (РАЗМЕР Mb)</p> </video></p>`;
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret(`<p style='text-align: justify'><span style='color: #FF9933'><b>Название</b></span>
<video width='640' height='360' src=\"ССЫЛКА НА ВИДЕО.webm\" controls autobuffer>

<p>Если видео не воспроизводится, скачайте его по ссылке: <a href=\"ССЫЛКА НА ВИДЕО.webm\">Download</a> (РАЗМЕР Mb)</p> </video></p>`);
        }
    }
};


audioId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<audio controls><source src="' + selectedText + '" type="audio/mp3"> \nТег audio не поддерживается вашим браузером. <a href="' + selectedText + '">Скачайте музыку</a></audio>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret(`<audio controls><source src='ССЫЛКА НА МУЗЫКУ.mp3' type='audio/mp3'>
Тег audio не поддерживается вашим браузером. <a href='ССЫЛКА НА МУЗЫКУ.mp3'>Скачайте музыку</a></audio>`);
        }
    }
};


coordinatesId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<a href="geo:' + selectedText + ';">' + selectedText + '</a>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret('<a href="geo:53.000000, 23.000000;">53.000000 23.000000</a>');
        }
    }
};


foId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<span style=color:yellow;><b>ФО:</b>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret('<span style=color:yellow;><b>ФО:</b> ТЕКСТ </span>');
        }
    }
};

exampleId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<span style=color:yellow;><b>Пример:</b>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret('<span style=color:yellow;><b>Пример:</b> ТЕКСТ </span>');
        }
    }
};

// Кнопки для квеста
qLimeId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #00FF00\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<span style='color: #00FF00'>#</span>");
        }
    }
};

qRedId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #FF0000\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<span style='color: #FF0000'>#</span>");
        }
    }
};

qYellowId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum];
    if (text.selectionStart != undefined) {
        let startPos = text.selectionStart;
        let endPos = text.selectionEnd;
        let selectedText = text.value.substring(startPos, endPos)

        if (selectedText) {
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #FFFF00\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else {
            insertAtCaret("<span style='color: #FFFF00'>#</span>");
        }
    }
};

qOrangeId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum]; // Находим поле ввода данных
    if (text.selectionStart != undefined) { // Проверяем на существование
        let startPos = text.selectionStart; // Устанавливаем стартовую позицию
        let endPos = text.selectionEnd; // Устанавливаем конечную позицию
        let selectedText = text.value.substring(startPos, endPos) // УПроверяем текст на выделение

        if (selectedText) { // Добавляем тег для выделеного текста
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #FFA500\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else { // Вставляем стандартный тег, если текст не выделен
            insertAtCaret("<span style='color: #FFA500'>#</span>");
        }
    }
};

qBlueId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum]; // Находим поле ввода данных
    if (text.selectionStart != undefined) { // Проверяем на существование
        let startPos = text.selectionStart; // Устанавливаем стартовую позицию
        let endPos = text.selectionEnd; // Устанавливаем конечную позицию
        let selectedText = text.value.substring(startPos, endPos) // УПроверяем текст на выделение

        if (selectedText) { // Добавляем тег для выделеного текста
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #0000FF\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else { // Вставляем стандартный тег, если текст не выделен
            insertAtCaret("<span style='color: #0000FF'>#</span>");
        }
    }
};

qPurpleId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum]; // Находим поле ввода данных
    if (text.selectionStart != undefined) { // Проверяем на существование
        let startPos = text.selectionStart; // Устанавливаем стартовую позицию
        let endPos = text.selectionEnd; // Устанавливаем конечную позицию
        let selectedText = text.value.substring(startPos, endPos) // УПроверяем текст на выделение

        if (selectedText) { // Добавляем тег для выделеного текста
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #800080\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else { // Вставляем стандартный тег, если текст не выделен
            insertAtCaret("<span style='color: #800080'>#</span>");
        }
    }
};

qFuchsiaId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum]; // Находим поле ввода данных
    if (text.selectionStart != undefined) { // Проверяем на существование
        let startPos = text.selectionStart; // Устанавливаем стартовую позицию
        let endPos = text.selectionEnd; // Устанавливаем конечную позицию
        let selectedText = text.value.substring(startPos, endPos) // УПроверяем текст на выделение

        if (selectedText) { // Добавляем тег для выделеного текста
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #FF00FF\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else { // Вставляем стандартный тег, если текст не выделен
            insertAtCaret("<span style='color: #FF00FF'>#</span>");
        }
    }
};

qAquaId.onclick = function() {
    let text = document.getElementsByTagName("textarea")[textareaNum]; // Находим поле ввода данных
    if (text.selectionStart != undefined) { // Проверяем на существование
        let startPos = text.selectionStart; // Устанавливаем стартовую позицию
        let endPos = text.selectionEnd; // Устанавливаем конечную позицию
        let selectedText = text.value.substring(startPos, endPos) // УПроверяем текст на выделение

        if (selectedText) { // Добавляем тег для выделеного текста
            let v = text.value.substring(0, startPos);
            v += '<span style=\'color: #00FFFF\'>' + selectedText + '</span>';
            v += text.value.substring(endPos);
            text.value = v;
        } else { // Вставляем стандартный тег, если текст не выделен
            insertAtCaret("<span style='color: #00FFFF'>#</span>");
        }
    }
};
// Кнопки для квеста

authorId.onclick = function() {
    insertAtCaret(`EEP EnEditPanel ${version} - панель редактирования заданий игрового движка Encounter.
Предложения по улучшению и расширению функционала панели пишем @Viruss13k`);
};

