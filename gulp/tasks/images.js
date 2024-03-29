import webp from "gulp-webp"
import imagesMin from "gulp-imagemin"

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "IMAGES",
				message: "Error: <%= error.message %>"
			})
		))
		// .pipe(app.plugins.newer(app.path.build.images))
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 		webp()
		// 	)
		// )
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 	app.gulp.dest(app.path.build.images)
		// 	)
		// )

		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 	app.gulp.src(app.path.src.images)
		// 	)
		// )
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 		app.plugins.newer(app.path.build.images)
		// 	)
		// )
		// .pipe(
		// 	app.plugins.gulpIf(
		// 		app.isBuild,
		// 		imagesMin({
		// 			progressive: true,
		// 			svgoPlugins: [{removeViewBox: false}],
		// 			interlaced: true,
		// 			optimizationLevel: 3 // 0 to 7
		// 		})
		// 	)
		// )
		// .pipe(app.gulp.dest(app.path.build.images))

		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.plugins.browserSync.stream())
}
