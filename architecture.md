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
│   │   ├── NotFound404/
│   │   ├── Tours/
│   │   ├── TourInfo/
│   │   └── Team/
│   ├── App.css  
│   ├── App.test.tsx
│   ├── App.tsx  
│   ├── index.css
│   ├── main.tsx         
│   └── setupTest.ts
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
client-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assects/
│   │   └── react.svg
│   ├── components/     
│   ├── pages/         
│   │   ├── ApplicationsManagement/
│   │   ├── Login/
│   │   ├── TeamManagement/
│   │   └── ToursManagement/
│   ├── App.css  
│   ├── App.test.tsx
│   ├── App.tsx  
│   ├── index.css
│   ├── main.tsx         
│   └── setupTest.ts
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
│   ├── Banner/
│   ├── Card/
│   ├── ContactCard/
│   ├── Form/
│   ├── PhotoGallery/
│   ├── ProductCard/
│   ├── TeamCard/
│   ├── index.ts
│   └── setupTests.ts
├── .gitignore  
├── eslint.config.js
├── jest.config.js    
├── package.json
├── tsconfig.json
└── vite.config.js
```

## Технологический стек
### Runtime зависимости
- react ^19.2.0 - UI библиотека
- react-dom ^19.2.0 - Рендеринг React
- react-router-dom ^7.9.6 - Маршрутизация
- @my-app/ui-library * - Локальные UI-компоненты

#### Dev зависимости
- typescript ~5.9.3 - Статическая типизация
- vite ^7.1.11 - Сборщик и dev-сервер
- eslint ^9.36.0 - Линтинг кода
- jest ^30.2.0 - Тестирование

## Компоненты
1. PhotoGallery - Адаптивная галерея фотографий
2. ProductCard - Карточка товара(тура)
3. Banner - Главный баннер страницы с фоновым изображением
4. Card - Универсальный контейнер для контента
5. ContactCard - Карточка контактов с ссылками на соцсети:
6. Form - Форма для подачи заявок
7. TeamCard - Карточка сотрудника команды

## Структура роутинга приложений
### Клиентское приложение
```
Главная страница
├── Наша команда
├── Наши программы
│   ├── Тур 1
│   ├── Тур 2
│   └── ...
└── 404
```
### Административная панель
```
Страница входа
├── Управление турами
├── Управление командой
└── Обработка заявок
```
## Хранение данных
Данные хранятся в локальных ts-файлах
