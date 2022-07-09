const dark = {
  primaryDark: '#000235',
  primaryDarkBleaker: '#515586',
  primaryDarkBrighter: '#BCC6FF',
  primaryLight: '#FFFFFF',
  secondaryLight: '#F176E0',
  secondaryLightBrighter: '#FFB6F5',
  screen: {
    phone: '320px',
    tablet: '500px',
    laptop: '800px',
  },
};

export type ThemeType = typeof dark;

const theme = dark;
export default theme;
