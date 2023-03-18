const copy = () => {
    return app.gulp.src(app.path.src.Localizations)
        .pipe(app.gulp.dest(app.path.build.Localizations))
}

export default copy