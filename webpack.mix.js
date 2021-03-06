let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('public')

mix.scripts([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/semantic-ui/dist/semantic.min.js',
    './node_modules/simplebar/dist/simplebar.js',
    'resources/js/components/flash.js',
    'resources/js/app.js'
], 'public/js/all.js');

mix.sass('resources/sass/app.scss', 'public/css')
    .options({
        processCssUrls: false
    });

mix.styles([
    './node_modules/simplebar/dist/simplebar.css',
    './public/css/app.css',
], 'public/css/all.css');

mix.copyDirectory('resources/img', 'public/img');

mix.version(['./public/semantic/semantic.min.css', './public/css/all.css', './public/js/all.js']);
