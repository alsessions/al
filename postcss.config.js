module.exports = {
  plugins: [
    require('postcss-import'),
    require('@tailwindcss/jit'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}