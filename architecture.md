# Архитектура проекта
## Обзор
Система состоит из трех независимых проектов в монорепозитории:
### client-app - клиентское SPA для пользователей
```
client-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assects/
│   │   └── react.svg
│   ├── components/     
│   ├── pages/         
│   │   ├── Home/
│   │   ├── Tours/
│   │   ├── TourInfo/
│   │   └── Team/
│   ├── App.css  
│   ├── App.test.tsx
│   ├── App.tsx  
│   ├── index.css        
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package.json
├── vite.config.js
├── tsconfig.node.json
├── tsconfig.ts
└── tsconfig.json
```
### admin-panel - административная панель
```
admin-panel/
├── public/
│   └── vite.svg
├── src/
│   ├── assects/
│   │   └── react.svg
│   ├── components/     
│   ├── pages/         
│   │   ├── Login/
│   │   ├── Dashboard/
│   │   ├── ToursManagement/
│   │   └── TeamManagement/
│   ├── App.css  
│   ├── App.test.tsx
│   ├── App.tsx  
│   ├── index.css        
│   └── main.tsx
├── .gitignore
├── eslint.config.js
├── index.html
├── jest.config.ts
├── package.json
├── vite.config.js
├── tsconfig.node.json
├── tsconfig.ts
└── tsconfig.json
```
### ui-library - библиотека UI-компонентов
```
ui-library/
├── src/
│   ├── Button/
│   ├── Form/
│   ├── Input/
│   ├── Card/
│   ├── PhotoGallery/
│   ├── ProductCard/
│   └── index.ts      
├── package.json
├── .gitignore
├── eslint.config.js
├── jest.config.js
├── vite.config.js
└── tsconfig.json
```

## Технологический стек
### Runtime зависимости
- react ^19.2.0 - UI библиотека
- react-dom ^19.2.0 - Рендеринг React
- react-router-dom ^6.0.0 - Маршрутизация
- @my-app/ui-library * - Локальные UI-компоненты

#### Dev зависимости
- typescript ~5.9.3 - Статическая типизация
- vite ^7.1.11 - Сборщик и dev-сервер
- eslint ^9.36.0 - Линтинг кода
- jest ^30.2.0 - Тестирование

## Компоненты
- Button - Универсальная кнопка с вариантами стилей
- Form - Базовая форма с валидацией
- Input - Поле ввода данных
- Card - Контейнер для контента
- PhotoGallery - Галерея изображений
- ProductCard - Карточка товара для туров

## Структура роутинга приложений
### Клиентское приложение
```
Главная страница
├── Наша команда
└── Наши программы
    ├── Тур 1
    ├── Тур 2
    └── ...
```
### Административная панель
```
Страница входа
├── Управление турами
├── Редактирование туров
├── Управление командой
└── Обработка заявок
```
## Хранение данных
Данные хранятся в локальных JSON-файлах. Состояние управляется через React hooks (useState, useContext). Административная панель поддерживает CRUD-операции с сохранением в локальном состоянии.
