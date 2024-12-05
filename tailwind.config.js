module.exports = {
  content: [
    "./index.html",            // Archivo principal
    "./pages/**/*.html",       // Archivos en la carpeta pages
    "./modules/**/*.js",       // Archivos de scripts
    "./styles/**/*.css",       // Archivos CSS personalizados
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
