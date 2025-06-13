export const theme = {
  /* 顏色 */
  colors: {
    /* 主色系 */
    primary: {
      main: '#000000',
      hover: '#AA666699',
      // main: '#2d5016',
      // hover: '#5a8a2a',
    },

    /* 背景色 */
    background: {
      white: '#FFFFFF',
      main: '#DCCCBC',
      light: '#F5F5F0',
    },

    /* 文字顏色 */
    text: {
      white: '#FFFFFF',
      black: '#000000',
      main: '#2d5016',
      hover: '#AA666699',
    },

    /* 灰階系統 */
    gray: {
      50: '#F9F9F9',
      100: '#F5F5F0',
      200: '#E0E0E0',
      300: '#BDBDBD',
      400: '#9E9E9E',
      500: '#757575',
      600: '#616161',
      700: '#424242',
      800: '#303030',
      900: '#212121',
    },

    /* 邊框顏色 */
    border: {
      primary: '#2d5016',
      light: '#E0E0E0',
    },
  },

  /* 字體 */
  typography: {
    /* 字體粗細 */
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },

    /* 字體大小 */
    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '2rem', // 30px
      '4xl': '2.5rem', // 40px
      '5xl': '3rem', // 48px
    },
  },

  /* 間距 */
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    md: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },

  /* 斷點 */
  breakpoints: {
    mobileSm: '375px',
    mobileMd: '765px',
    mobileLg: '1024px',
    tablet: '1440px',
    desktop: '1920px',
  },

  shadow: {
    text: {
      main: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    },
  },
};
