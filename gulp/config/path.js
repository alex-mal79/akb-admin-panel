import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = rootFolder;
const srcFolder = `./src`;

export const path = {
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        images: `${buildFolder}/img/`,
        svgSprite: `${srcFolder}/img/icons`,
        fonts: `${buildFolder}/fonts/`,
        files: `${buildFolder}/uploads/`,
        fonts: `${buildFolder}/fonts/`,
        favicon: `${buildFolder}/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        cssVendor: `${srcFolder}/scss/vendor/**/*.css`,
        mainJs: `${srcFolder}/js/main.js`,
        appJs: `${srcFolder}/js/app.js`,
        jsVendor: `${srcFolder}/js/vendor/**/*.js`,
        json: `${srcFolder}/js/json/**/*.json`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,avif}`,
        svg: `${srcFolder}/img/**/*.svg`,
        svgSprite: `${srcFolder}/sprite/*.svg`,
        favicon: `${srcFolder}/favicon.ico`,
        files: `${srcFolder}/uploads/**/*.*`,
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        cssVendor: `${srcFolder}/scss/vendor/**/*.css`,
        js: `${srcFolder}/js/**/*.js`,
        jsVendor: `${srcFolder}/js/vendor/**/*.js`,
        json: `${srcFolder}/js/json/**/*.json`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico,avif}`,
        favicon: `${srcFolder}/favicon.ico`,
        files: `${srcFolder}/uploads/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}