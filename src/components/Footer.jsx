import LittleLemonLogo from '../assets/logo.png';

import '../styles/Footer.css'

export function Footer() {

    return (
        <footer>
            <img src={LittleLemonLogo} alt="little lemon logo" />

            <div className='lists'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>

                <ul>
                    <li>Adress</li>
                    <li>Phone number</li>
                    <li>email</li>
                </ul>

                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </footer>
    )
}