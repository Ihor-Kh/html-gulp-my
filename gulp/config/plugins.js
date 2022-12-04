import replace from "gulp-replace"  // поиск и замена
import plumber from "gulp-plumber"  // обработака ошибок
import notify from "gulp-notify"    // вывод сообщений ошибок
import browserSync from "browser-sync"
import newer from "gulp-newer"
import gulpIf from "gulp-if"

export const plugins = {
	replace,
	plumber,
	notify,
	browserSync,
	newer,
	gulpIf
}