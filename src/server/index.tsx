import path from 'path';
import fs from 'fs';

import express from 'express';
import ReactDOMServer from 'react-dom/server';

import App from '../components/App';

//Определяем номер порта, который будет прослушиваться
const PORT = process.env.PORT || 3006;
//Получаем express-модуль
const app = express();

//Привязка по к приложению
app.get('/',  (req:any, res:any) => {
    //Получаем всю верстку с компонентов и заносим в строку
    const app = ReactDOMServer.renderToString(<App></App>);
    //Получения файла с версткой
    const indexFile = path.resolve('./build/index.html');

    //Чтение файла с версткой
    fs.readFile(indexFile, 'utf8', (err,data) => {
        if (err) {
            console.log('Что-то пошло не так');
            return res.status(500).send('Oops, better luck next time!');
        }

        //Возвращаем новую верстку с вставленной версткой 
        //с tsx-компонентов
        return res.send(
            `            
            <!DOCTYPE html>
            <html>
                <head>
                    <title>TypeScript ReactJS SSR App</title>
                    <style>
                        body {
                            margin: 0px;
                            padding: 0px;
                        }
                    </style>
                    <script>window.isSSR = true</script>
                </head>
                <body>
                    <div id="root">${app}</div>
                    <script type="application/javascript" src="bundle.js"></script>
                </body>
            </html>`
        );
    })
});

//Загружаем все файлы с паки build
app.use(express.static('./build'));

//Уведомляем разработчика на каком порту запущен сервер
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
