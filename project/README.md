# Описание проекта
Этот проект представляет собой библиотеку React компонентов и демонстрационное приложение, показывающее их использование. Проект разделен на две основные части:

ui-library/ - библиотека переиспользуемых React компонентов

frontend/ - демонстрационное приложение с примерами использования
## Технологии
- React 19 с TypeScript
- Vite для сборки
- Jest + Testing Library для тестирования
- ESLint для линтинга
- CSS Modules для стилизации

## Компоненты библиотеки
### 1. PhotoGallery
- Адаптивная галерея фотографий:
- Плиточное отображение
- Обрезка длинных подписей
- Адаптивное количество колонок
- Fallback при ошибках загрузки
### 2. ProductCard
- Карточка товара для интернет-магазинов:
- Фоновая картинка
- Гибкое позиционирование текста (слева/справа)
- Кнопка действия
- Градиентный оверлей для читаемости
### 3. Card
- Универсальный контейнер для контента:
- Поддерживает заголовок (опционально)
- Адаптивный дизайн

## Инструкция по запуску
### Предварительные требования
- Node.js 18+
- npm

### Установка и запуск
1. Клонирование репозитория

git clone < repository-url >

cd project

2. Установка зависимостей и запуск UI Library

cd ui-library

npm install

npm run build

3. Запуск приложений

cd ../client-app

npm install

npm run dev

и 

cd ../admin-panel

npm install

npm run dev

4. Открытие в браузере

Приложение client-app будет доступно по адресу: http://localhost:5173
Приложение admin-panel будет доступно по адресу: http://localhost:5174

## Скрипты проекта
### ui-library
- npm run build - сборка библиотеки
- npm run dev - разработка с вотчером
- npm run test - запуск тестов
- npm run lint - проверка кодстайла
- npm run test:coverage - запуск тестов с генерацией отчета о покрытии кода

### admin-panel и client-app
- npm run dev - запуск dev-сервера
- npm run test - запуск тестов
- npm run lint - проверка кодстайла
- npm run test:coverage - запуск тестов с генерацией отчета о покрытии кода

## Примеры работы приложения
![1](<pictures-for-readme/lab7_image_1.png>) 
![2](<pictures-for-readme/lab7_image_2.png>) 
![3](<pictures-for-readme/lab7_image_3.png>) 
![4](<pictures-for-readme/lab7_image_4.png>) 
![5](<pictures-for-readme/lab7_image_5.png>) 
![6](<pictures-for-readme/lab7_image_6.png>) 
![7](<pictures-for-readme/lab7_image_7.png>) 
![8](<pictures-for-readme/lab7_image_8.png>) 


## Тестирование

cd ui-library

npm run test
npm run test:coverage

cd ../frontend

npm run test
npm run test:coverage