let mix = require('laravel-mix');

mix
    .react('src/app.jsx', 'dist/js')
    .sass('scss/app.scss', 'css', {
        includePaths: ['node_modules/']
    });