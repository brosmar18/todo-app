import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer' data-testid="footer">
            <div className='footer__socials' data-testid="footer-socials">
                <IconBrandInstagram size={20} data-testid="icon-instagram" />
                <IconBrandTwitter size={20} data-testid="icon-twitter" />
                <IconBrandYoutube size={20} data-testid="icon-youtube" />
            </div>
        </footer>
    );
};

export default Footer;
