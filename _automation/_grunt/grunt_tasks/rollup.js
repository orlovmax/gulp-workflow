// Bundle ES6 modules.
var babel = require('rollup-plugin-babel');

module.exports = {
    options: {
        plugins: function () {
            return [
                babel({
                    exclude: './node_modules/**',
                    presets: ['es2015-rollup'],
                })
            ]
        }
    },
    main: {
        files: [{
            '<%= paths.build.js %>/body.min.js': '<%= paths.dev.js %>/body.js',
            '<%= paths.build.js %>/head.min.js': '<%= paths.dev.js %>/head.js'
        }]
    }
}
