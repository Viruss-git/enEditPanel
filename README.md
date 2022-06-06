### EnEditPanel
Скрипт предназначен для работы с плагином **Tempermonkey**

### Настройка скрипта под личные требования
Редактирование настроек **EnEditPanel** осуществляется в файле **enEditPanel.js**
Для работы скрипта, файл загружается на сервер **Encounter** и подключается через панель **Tempermonkey** в строке:
```
// @require      http://d1.endata.cx/images/personal/1484341/EnEditPanel.js
```

### Подключение скрипта к серверверам Encounter
В панели управления **Tempermonkey** добавить: 
```
// ==UserScript==
// @name         EEP EnEditPanel Final
// @namespace    http://arena.en.cx/
// @version      3.0.7.1
// @description  EEP - tagging panel for the game engine
// @author       Viruss. Telegram: @Viruss13K

// @match        http://*.en.cx/Administration/Games/TaskEdit.aspx?gid=*
// @match        http://*.en.cx/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        http://*.en.cx/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        http://*.en.cx/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        http://*.en.cx/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        http://*.en.cx/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        http://*.en.cx/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        http://*.en.cx/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        http://*.en.cx/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        http://*.en.cx/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        http://*.encounter.cx/Administration/Games/TaskEdit.aspx?gid=*
// @match        http://*.encounter.cx/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        http://*.encounter.cx/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        http://*.encounter.cx/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        http://*.encounter.cx/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        http://*.encounter.cx/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        http://*.encounter.cx/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        http://*.encounter.cx/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        http://*.encounter.cx/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        http://*.encounter.cx/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        http://*.quest.ua/Administration/Games/TaskEdit.aspx?gid=*
// @match        http://*.quest.ua/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        http://*.quest.ua/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        http://*.quest.ua/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        http://*.quest.ua/Administration/Games/PromptEdit.aspx?gid=*&level=*
// @match        http://*.quest.ua/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        http://*.quest.ua/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        http://*.quest.ua/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        http://*.quest.ua/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        http://*.quest.ua/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @match        http://quest.ua/Administration/Games/TaskEdit.aspx?gid=*
// @match        http://quest.ua/Administration/Games/TaskEdit.aspx?action=TaskEdit&gid=*
// @match        http://quest.ua/Administration/Games/TaskEdit.aspx?gid=*&action=TaskEdit&tid=*
// @match        http://quest.ua/Administration/Games/TaskEdit.aspx?level=*&gid=*&action=TaskEdit&tid=*

// @match        http://quest.ua/Administration/Games/PromptEdit.aspx?level=*&gid=*&prid=*&action=PromptEdit
// @match        http://quest.ua/Administration/Games/PromptEdit.aspx?action=PromptEdit&penalty=*&level=*&prid=*&gid=*

// @match        http://quest.ua/Administration/Games/BonusEdit.aspx?gid=*&level=*&action=add
// @match        http://quest.ua/Administration/Games/BonusEdit.aspx?action=edit&gid=*
// @match        http://quest.ua/Administration/Games/BonusEdit.aspx?level=*&gid=*&bonus=*&action=edit

// @grant        none
// @require      http://d1.endata.cx/images/personal/1484341/EnEditPanel302-1.js
// @require      http://d1.endata.cx/images/personal/1484341/fotohostUploadMain.js
// ==/UserScript==
```
