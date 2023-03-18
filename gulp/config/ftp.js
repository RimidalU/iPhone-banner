import * as dotenv from 'dotenv'

dotenv.config()

export const configFTP = {
    host: process.env.HOST, // Адрес FTP сервера
    user: process.env.USER, // Имя пользователя
    password: process.env.PASSWORD, // Пароль
    parallel: 1 // Кол-во одновременных потоков
}
