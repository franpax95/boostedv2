import React, { useContext } from 'react';
import { SettingsContext } from '../../contexts/SettingsContext';

import { PrimaryLink } from '../../components/Anchor';
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../../components/Button';


const Home = () => {
    const { setTheme } = useContext(SettingsContext);

    const onClick = () => setTheme();

    return (
        <div>
            Home page works!
            <PrimaryLink to="/notfound">Ir a NotFound</PrimaryLink>
            <br/><br/><br />
            <PrimaryButton onClick={onClick}>Cambiar tema</PrimaryButton>
            <br/><br/><br />
            <PrimaryButton>PRUEBA</PrimaryButton>
            <br/><br/><br />
            <PrimaryButton disabled={true}>Mucho texto loren ipsum tu sabe mami moto mami nuevo disco de rosalia</PrimaryButton>

            <br/><br/><br />
            <SecondaryButton>PRUEBA</SecondaryButton>
            <br/><br/><br />
            <SecondaryButton disabled={true}>Mucho texto loren ipsum tu sabe mami moto mami nuevo disco de rosalia</SecondaryButton>

            <br/><br/><br />
            <TertiaryButton>PRUEBA</TertiaryButton>
            <br/><br/><br />
            <TertiaryButton disabled={true}>Mucho texto loren ipsum tu sabe mami moto mami nuevo disco de rosalia</TertiaryButton>
        </div>
    );
}

export default Home;
