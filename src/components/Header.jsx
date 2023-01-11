import { Nav } from "./Nav";

import '../styles/Header.css';

import LittleLemonLogo from '../assets/logo.png';

export function Header() {

    return (
        <header>
            <img
                className="logo"

                src={LittleLemonLogo} alt="little lemon logo"
            />

            <Nav />
        </header>
    )
}