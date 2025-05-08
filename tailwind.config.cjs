/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors:{
        "CorFundoLogin":"#dcddd8",
        "CorToastSucesso":"#07bc0c",
        "CorToastErro":"#e74c3c",
        "CorFundoMenu" : "#334155",
        "CorFundoBarraSuperior":"#334155",
        "CorFundoHome":"#334155",
        "CorTextoMenu":"#fff",
        "CorTextoBarraSuperior":"#fff",
        "CorFundoLocalPerfil":"#1f2937",

        "BtnSucess":"#28a745",
        "BtnPrimary":"#007bff",
        "BtnSecundary":"#6c757d",
        "BtnDanger":"#dc3545",
        "BtnWarnig":"#ffc107",
        "BtnDefault":"#028D8D",
        "BtnLigth":"#f8f9fa",
        "BtnDark":"#343a40",
        "BrnLink":"#ffffff",

        "BtnSucessHover":"#25973F",
        "BtnPrimaryHover":"#0472E8",
        "BtnSecundaryHover":"#5D6771",
        "BtnDangerHover":"#CE2C3B",
        "BtnWarnigHover":"#F1B606",
        "BtnDefaultHover":"#037E7E",
        "BtnLigthHover":"#EFF6FD",
        "BtnDarkHover":"#2F353B",
        "BrnLinkHover":"#f8f9fa"
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
