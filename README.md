# Websocket Downloader

Простое приложение для демонстрации загрузки контента через WebSockets.

## Установка

1. **Клонирование репозитория:**
    ```sh
    git clone https://github.com/your-username/websocket-downloader.git
    cd websocket-downloader
    ```

2. **Установка зависимостей:**
    ```sh
    npm install
    ```

## Запуск

1. **Запуск сервера:**
    ```sh
    npm start
    ```
    Сервер будет доступен на [http://localhost:3000](http://localhost:3000).

2. **Использование:**
   - Откройте веб-браузер и перейдите по адресу [http://localhost:3000](http://localhost:3000).
   - Введите ключевое слово (например, "example") и нажмите кнопку "Get URLs".
   - Выберите URL для загрузки, нажав соответствующую кнопку.
   - Статус загрузки и контент отобразятся на странице.

## Зависимости

- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [Socket.io](https://socket.io/)
