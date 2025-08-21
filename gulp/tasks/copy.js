export const files = () => {
    return app.gulp.src(app.path.src.files)
        .pipe(app.gulp.dest(app.path.build.files));
}

export const cssVendor = () => {
    return app.gulp.src(app.path.src.cssVendor)
        .pipe(app.gulp.dest(app.path.build.css));
}

export const jsVendor = () => {
    return app.gulp.src(app.path.src.jsVendor)
        .pipe(app.gulp.dest(app.path.build.js));
}

export const json = () => {
    return app.gulp.src(app.path.src.json)
        .pipe(app.gulp.dest(app.path.build.js));
}

export const favicon = () => {
    return app.gulp.src(app.path.src.favicon)
        .pipe(app.gulp.dest(app.path.build.favicon));
}