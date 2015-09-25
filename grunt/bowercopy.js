// Scrupulously manage file locations for bower dependencies
module.exports = {
  options: {
    clean: true,
    ignore: ['modernizr']
  },
  jquery: {
    options: {
        destPrefix: '<%= dev.js %>/vendor'
    },
    files: {
      'jquery': 'jquery/dist/jquery.js'
    },
  }
}
