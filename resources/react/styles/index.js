import { THEME } from '../states/theming';
import { lighten, darken, addOpacityToHex } from './utils';

// Paleta de colores LIGHT
const primaryLight = '#52734D';
const secondaryLight = '#91C788';
const tertiaryLight = '#DDFFBC';
const quaternaryLight = '#FEFFDE';

// Paleta de colores DARK
const primaryDark = '#A7D129';
const secondaryDark = '#616F39';
const tertiaryDark = '#3E432E';
const quaternaryDark = '#2b2b2b';

export default {
    /**
     * Paleta de colores
     */
    color: {
        facebook: '#3F62A9',
        twitter: '#1C99E6',
        instagram: '#D22774',
        linkedin: '#0075AC',

        primary: {
            [THEME.LIGHT]: {
                default: primaryLight,
                hover: darken(primaryLight, 10),
                active: lighten(primaryLight, 10),
                disabled: addOpacityToHex(primaryLight, .6)
            },
            [THEME.DARK]: {
                default: primaryDark,
                hover: lighten(primaryDark, 10),
                active: darken(primaryDark, 10),
                disabled: addOpacityToHex(primaryDark, .6)
            }
        },

        secondary: {
            [THEME.LIGHT]: {
                default: secondaryLight,
                hover: darken(secondaryLight, 10),
                active: lighten(secondaryLight, 10),
                disabled: addOpacityToHex(secondaryLight, .6)
            },
            [THEME.DARK]: {
                default: secondaryDark,
                hover: lighten(secondaryDark, 10),
                active: darken(secondaryDark, 10),
                disabled: addOpacityToHex(secondaryDark, .6)
            }
        },

        tertiary: {
            [THEME.LIGHT]: {
                default: tertiaryLight,
                hover: darken(tertiaryLight, 10),
                active: lighten(tertiaryLight, 10),
                disabled: addOpacityToHex(tertiaryLight, .6)
            },
            [THEME.DARK]: {
                default: tertiaryDark,
                hover: lighten(tertiaryDark, 10),
                active: darken(tertiaryDark, 10),
                disabled: addOpacityToHex(tertiaryDark, .6)
            }
        },

        quaternary: {
            [THEME.LIGHT]: {
                default: quaternaryLight,
                hover: darken(quaternaryLight, 20),
                active: lighten(quaternaryLight, 20),
                disabled: addOpacityToHex(quaternaryLight, .6)
            },
            [THEME.DARK]: {
                default: quaternaryDark,
                hover: lighten(quaternaryDark, 30),
                active: darken(quaternaryDark, 10),
                disabled: addOpacityToHex(quaternaryDark, .6)
            }
        },
    },

    /**
     * Font sizes
     */
    font: {
        xs: '9px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '30px',
        xxl: '50px'
    },

    /**
     * Width Viewport Breakpoints
     */
    media: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992, 
        xl: 1200,
        xxl: 1400
    },

    /**
     * Default transition duration
     */
    transitionDuration: '.5s',
};
