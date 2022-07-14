// define the dark theme which is the current default
const dark = {
  primaryDark: 'rgba(0, 2, 53, 1)', //#000235
  primaryDarkBleaker: 'rgba(81, 85, 134, 1)', //#515586
  primaryDarkBleakerTransparent: 'rgba(81, 85, 134, 0.5)', //#515586
  primaryDarkBrighter: 'rgba(188, 198, 255, 1)', //#BCC6FF
  primaryLight: 'rgba(255, 255, 255, 1)', //#FFFFFF
  primaryLightTransparent: 'rgba(255, 255, 255, 0.5)', //#FFFFF
  secondaryLight: 'rgba(241, 118, 224, 1)', //#F176E0
  secondaryLightBrighter: 'rgba(255, 182, 245, 1)', //#FFB6F5
  primaryFontFamily: 'Outfit',
  secondaryFontFamily: 'Roboto',
  screen: {
    mobile: '400px',
    tablet: '500px',
    laptop: '800px',
  },
};

// set the default theme to dark
const theme = dark;

// the type definition for the dark type object
export type ThemeType = typeof dark;

export default theme;
