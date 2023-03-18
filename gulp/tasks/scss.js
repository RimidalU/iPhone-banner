
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import GulpCleanCss from 'gulp-clean-css' // compress css
import webpcss from 'gulp-webpcss' // webp images
import autoPrefixer from 'gulp-autoprefixer' //add vendor prefix
import grupCssMediaQueris from 'gulp-group-css-media-queries' //group media queries

const sass = gulpSass(dartSass)

const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.if(
                app.isBuild,
                grupCssMediaQueris()
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                })
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                autoPrefixer({
                    grid: true,
                    overrideBrowsersList: ["last 3 version"],
                    cascade: true
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(
            app.plugins.if(
                app.isBuild,
                GulpCleanCss()
            )
        )
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}

export default scss