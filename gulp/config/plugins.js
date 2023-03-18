import gulpPlumber from "gulp-plumber" // error processing
import replace from "gulp-replace" // search and replace
import notify from 'gulp-notify' //messages (tips)
import browserSync from 'browser-sync' // local server
import newer from 'gulp-newer' // update check
import ifPlugin from 'gulp-if'

export const plugins = {
    replace: replace,
    plumber: gulpPlumber,
    notify: notify,
    browserSync: browserSync,
    newer: newer,
    if: ifPlugin
}