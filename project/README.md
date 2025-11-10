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

3. Запуск демо-приложения

cd ../frontend

npm install

npm run dev

4. Открытие в браузере

Приложение будет доступно по адресу: http://localhost:5173

## Скрипты проекта
### UI Library (ui-library/)
- npm run build - сборка библиотеки
- npm run dev - разработка с вотчером
- npm run test - запуск тестов
- npm run lint - проверка кодстайла
- npm run test:coverage - запуск тестов с генерацией отчета о покрытии кода

### Frontend (frontend/)
- npm run dev - запуск dev-сервера
- npm run build - сборка для production
- npm run test - запуск тестов
- npm run lint - проверка кодстайла

## Примеры работы приложения
PhotoGallery компонент
![1](<pictures-for-readme/image_2.png>) 

ProductCard компонент
![2](<pictures-for-readme/image_3.png>) 

Несколько ProductCard компонентов
![3](<pictures-for-readme/image_4.png>) 

Адаптивный дизайн
![4](<pictures-for-readme/image_1.png>) 


## Тестирование

cd ui-library

npm run test

cd ../frontend

npm run test