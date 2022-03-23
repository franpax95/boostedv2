import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { THEME } from '../../states/theming';
import styles from '../../styles';
import { addOpacityToHex } from '../../styles/utils';

const { color, font, media, transitionDuration } = styles;
const { [THEME.LIGHT]: primaryLight, [THEME.DARK]: primaryDark } = color.primary;
const { [THEME.LIGHT]: secondaryLight, [THEME.DARK]: secondaryDark } = color.secondary;
const { [THEME.LIGHT]: tertiaryLight, [THEME.DARK]: tertiaryDark } = color.tertiary;
const { [THEME.LIGHT]: quaternaryLight, [THEME.DARK]: quaternaryDark } = color.quaternary;


/**
 * Main Buttons: Primary, Secondary, Tertiary
 * 
 * La idea de esta manera de organizar los estilos es que puedan exportarse
 * los estilos, o parte de ellos, para ser usados y extendidos por otros componentes.
 */
const btnCommonCSS = css`
    width: 100%;
    max-width: 300px;
    height: 50px;

    position: relative;

    display: flex;
    flex-direction: row;
    gap: .25rem;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 6px;

    font-size: ${font.md};

    transition: all ${transitionDuration};

    @media (min-width: ${media.sm}px) {
        width: auto;
        width: fit-content;
        max-width: initial;
        padding: 0 1.5rem;
    }

    @media (min-width: ${media.md}px) {
        padding: 0 2rem;
    }

    @media (min-width: ${media.lg}px) {
        padding: 0 3rem;
        font-size: ${font.lg};
    }
`;

export const PrimaryButtonCSS = css`
    ${btnCommonCSS};

    background-color: ${theme('mode', { [THEME.LIGHT]: primaryLight.default, [THEME.DARK]: primaryDark.default })};
    color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.default, [THEME.DARK]: quaternaryDark.default })};

    &:hover:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: primaryLight.hover, [THEME.DARK]: primaryDark.hover })};
        color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.hover, [THEME.DARK]: quaternaryDark.hover })};
        box-shadow: 0px 5px 10px 0px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(primaryLight.hover, .3), [THEME.DARK]: addOpacityToHex(primaryDark.hover, .3) })};
        transform: translateY(-3px);
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: primaryLight.active, [THEME.DARK]: primaryDark.active })};
        color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.active, [THEME.DARK]: quaternaryDark.active })};
        box-shadow: 0px 5px 10px -5px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(primaryLight.active, .3), [THEME.DARK]: addOpacityToHex(primaryDark.active, .3) })};
        transform: translateY(-1px);
    }

    &.disabled {
        background-color: ${theme('mode', { [THEME.LIGHT]: primaryLight.disabled, [THEME.DARK]: primaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.disabled, [THEME.DARK]: quaternaryDark.disabled })};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${theme('mode', { [THEME.LIGHT]: primaryLight.disabled, [THEME.DARK]: primaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.disabled, [THEME.DARK]: quaternaryDark.disabled })};
    }
`;

export const StyledPrimaryButton = styled.button`
    ${PrimaryButtonCSS};
    font-weight: 500;
`;

export const SecondaryButtonCSS = css`
    ${btnCommonCSS};

    background-color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.default, [THEME.DARK]: tertiaryDark.default })};
    color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.default, [THEME.DARK]: secondaryDark.default })};

    &:hover:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.hover, [THEME.DARK]: tertiaryDark.hover })};
        color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.hover, [THEME.DARK]: secondaryDark.hover })};
        box-shadow: 0px 5px 10px 0px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(secondaryLight.hover, .3), [THEME.DARK]: addOpacityToHex(tertiaryDark.hover, .3) })};
        transform: translateY(-3px);
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.active, [THEME.DARK]: tertiaryDark.active })};
        color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.active, [THEME.DARK]: secondaryDark.active })};
        box-shadow: 0px 5px 10px -5px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(secondaryLight.active, .3), [THEME.DARK]: addOpacityToHex(tertiaryDark.active, .3) })};
        transform: translateY(-1px);
    }

    &.disabled {
        background-color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.disabled, [THEME.DARK]: tertiaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.disabled, [THEME.DARK]: secondaryDark.disabled })};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.disabled, [THEME.DARK]: tertiaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.disabled, [THEME.DARK]: secondaryDark.disabled })};
    }
`;

export const StyledSecondaryButton = styled.button`
    ${SecondaryButtonCSS};
`;

export const TertiaryButtonCSS = css`
    ${btnCommonCSS};

    background-color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.default, [THEME.DARK]: secondaryDark.default })};
    color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.default, [THEME.DARK]: tertiaryDark.default })};

    &:hover:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.hover, [THEME.DARK]: secondaryDark.hover })};
        color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.hover, [THEME.DARK]: tertiaryDark.hover })};
        box-shadow: 0px 5px 10px 0px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(tertiaryLight.hover, .3), [THEME.DARK]: addOpacityToHex(secondaryDark.hover, .3) })};
        transform: translateY(-3px);
    }

    &:active:not(:disabled),
    &:focus:not(:disabled) {
        background-color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.active, [THEME.DARK]: secondaryDark.active })};
        color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.active, [THEME.DARK]: tertiaryDark.active })};
        box-shadow: 0px 5px 10px -5px ${theme('mode', { [THEME.LIGHT]: addOpacityToHex(tertiaryLight.active, .3), [THEME.DARK]: addOpacityToHex(secondaryDark.active, .3) })};
        transform: translateY(-1px);
    }

    &.disabled {
        background-color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.disabled, [THEME.DARK]: secondaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.disabled, [THEME.DARK]: tertiaryDark.disabled })};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${theme('mode', { [THEME.LIGHT]: tertiaryLight.disabled, [THEME.DARK]: secondaryDark.disabled })};
        color: ${theme('mode', { [THEME.LIGHT]: secondaryLight.disabled, [THEME.DARK]: tertiaryDark.disabled })};
    }
`;

export const StyledTertiaryButton = styled.button`
    ${TertiaryButtonCSS};
`;



/**
 * Burger Button
 */
export const StyledBurgerButton = styled.button`
    width: 40px;
    height: 30px;

    position: relative;

    cursor: pointer;
    outline: none;
    border: none;
    background: rgba(0, 0, 0, 0);

    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;

    span {
        height: 6px;
        width: 100%;

        position: absolute;
        left: 0;
        
        display: block;

        opacity: 1;
        border-radius: 9px;
        background: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.default, [THEME.DARK]: quaternaryDark.default })};

        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    span:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    span:nth-child(2) {
        top: 12px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    span:nth-child(3) {
        top: 24px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    &.open span:nth-child(1) {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
        top: -3px;
        left: 8px;
    }

    &.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    &.open span:nth-child(3) {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 26px;
        left: 8px;
    }

    &:hover span {
        background-color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.hover, [THEME.DARK]: quaternaryDark.hover })};
    }

    &:active span {
        background-color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.active, [THEME.DARK]: quaternaryDark.active })};
    }

    &:disabled span {
        background-color: ${theme('mode', { [THEME.LIGHT]: quaternaryLight.disabled, [THEME.DARK]: quaternaryDark.disabled })};
    }
`;



/**
 * Toggle Theme & Language Styles
 */
export const ToggleWrapper = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
    align-items: center;
`;

export const ToggleButton = styled.button`
    ${props => !!props.active ? PrimaryButtonCSS : TertiaryButtonCSS};
    width: 135px !important;
    padding: .5rem !important;
    font-size: ${font.md} !important;
    white-space: nowrap;
`;
