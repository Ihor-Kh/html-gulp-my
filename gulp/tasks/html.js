import fileInclude from "gulp-file-include"
import webpHtmlNoSvg from "gulp-webp-html-nosvg" // не работает изменяет формат файла картинки на меньший

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "HTML",
				message: "Error: <%= error.message %>"
			})
		))
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/src\/img\//g, './img/'))
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 		webpHtmlNoSvg()
		// 	)
		// )
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browserSync.stream())
}
