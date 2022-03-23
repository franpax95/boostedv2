import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';
import { THEME } from '../../states/theming';
import { StyledPrimaryButton, StyledSecondaryButton, StyledTertiaryButton, ToggleWrapper, ToggleButton, StyledBurgerButton } from './style';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { LANG } from '../../states/lang';

export const PrimaryButton = ({ onClick, disabled, children }) => {
    return <StyledPrimaryButton onClick={onClick} disabled={disabled}>{ children }</StyledPrimaryButton>;
}

export const SecondaryButton = ({ onClick, disabled, children }) => {
    return <StyledSecondaryButton onClick={onClick} disabled={disabled}>{ children }</StyledSecondaryButton>;
}

export const TertiaryButton = ({ onClick, disabled, children }) => {
    return <StyledTertiaryButton onClick={onClick} disabled={disabled}>{ children }</StyledTertiaryButton>;
}

export const BurgerButton = ({ active, onClick, disabled }) => {
    return (
        <StyledBurgerButton className={`BurgerButton ${active ? 'open' : ''}`} onClick={onClick} disabled={disabled}>
            <span></span>
            <span></span>
            <span></span>
        </StyledBurgerButton>
    );
}

export const ThemeToggle = () => {
    const { theme, setTheme } = useContext(SettingsContext);

    const onLightClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setTheme(THEME.LIGHT);
    }

    const onDarkClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setTheme(THEME.DARK);
    }

    return (
        <ToggleWrapper>
            <ToggleButton active={theme === THEME.LIGHT} onClick={onLightClick}>
                <BsFillSunFill />
                <span>Tema claro</span>
            </ToggleButton>

            <ToggleButton active={theme === THEME.DARK} onClick={onDarkClick}>
                <BsFillMoonFill />
                <span>Tema oscuro</span>
            </ToggleButton>
        </ToggleWrapper>
    );
}

export const LanguageToggle = () => {
    const { lang, setLang } = useContext(SettingsContext);

    const onEspClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setLang(LANG.ESP);
    }

    const onEngClick = event => {
        event.preventDefault();
        event.stopPropagation();
        setLang(LANG.ENG);
    }

    return (
        <ToggleWrapper>
            <ToggleButton active={lang === LANG.ESP} onClick={onEspClick}>
                <BsFillSunFill />
                <span>Español</span>
            </ToggleButton>

            <ToggleButton active={lang === LANG.ENG} onClick={onEngClick}>
                <BsFillMoonFill />
                <span>Inglés</span>
            </ToggleButton>
        </ToggleWrapper>
    );
}
