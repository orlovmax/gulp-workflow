//Copy bower components to the custom folder
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
