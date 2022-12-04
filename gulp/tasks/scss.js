import dartSass from "sass"
import gulpSass from "gulp-sass"
import rename from "gulp-rename"

import autoprefixer from "gulp-autoprefixer"
import cleanCss from "gulp-clean-css"
import groupCssMediaQueries from "gulp-group-css-media-queries"

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SCSS",
				message: "Error: <%= error.message %>"
			})
		))
		// .pipe(app.plugins.replace(/src\/img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(
			app.plugins.gulpIf(
				app.isBuild,
			groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.gulpIf(
				app.isBuild,
			autoprefixer({
			grid: true,
			overrideBrowserslist: ["last 3 versions"],
			cascade: true
		})
			)
		)

		// сжатие и переименовывание файла css
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 	cleanCss()
		// 	)
		// )
		// .pipe(rename({
		// 	extname: '.min.css'
		// }))
		// конец сжатия

		.pipe(rename({
			extname: '.css'
		}))

		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browserSync.stream())
}