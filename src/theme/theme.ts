// define the dark theme which is the current default
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

// set the default theme to dark
const theme = dark;

// the type definition for the dark type object
export type ThemeType = typeof dark;

export default theme;
