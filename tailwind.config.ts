import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767px' },
      mdOnly: { min: '768px', max: '1279px' },
      notXL: { max: '1279px' },
    },
    extend: {
      colors: {
        greenDarkText: '#294945',
        greenBodyText: '#415552',
        greenLight: '#cae8d5',
        blueDark: '#4c6880',
        blue: '#6a8ea8',
        blueLight: '#c9f2f2',
        blueSuperLight: '#e7f0f6',
        beigeSkin: '#edaf8c',
        pinkLight: '#e2b8af',
        pinkSupperLight: '#fbefe9',
        beige: '#cea49b',
        grey: '#747474',
        greyLight: '#C5C5C5',
        redError: '#c34532',
        white: '#fff',
        black: '#000000',
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat), sans-serif',
        geologica: 'var(--font-geologica), sans-serif',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '20px',
        },
      },
    },
    backgroundImage: {},
  },
  plugins: [],
};
export default config;
