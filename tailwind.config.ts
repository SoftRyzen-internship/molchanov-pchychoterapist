import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        xl: '1280px',
      },
      colors: {
        greenDarkText: '#294945',
        greenBodyText: '#41555',
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
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
