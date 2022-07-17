import {} from 'styled-components';
// import the unique theme type definition
import { ThemeType } from './theme';

declare module 'styled-components' {
    // extend the global DefaultTheme to now include properties from the imported ThemeType
    export interface DefaultTheme extends ThemeType {}
}
