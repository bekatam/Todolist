import './Footer.css';
import {memo} from 'react';

export const Footer:React.FC = memo(() => {
    return (
        <footer>
            <div className="footer__love">Made with ❤️ in 2023.</div>
            <div className="footer__credits">Credits: icons from <a className='footer__credits__icons' href='https://www.mui.com/' target='_blank' rel="noreferrer">MUI</a>.</div>
        </footer>
    )
})