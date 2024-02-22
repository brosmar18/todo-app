import { logo } from '../../assets';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__socials'>
                <IconBrandInstagram size={20} />
                <IconBrandTwitter size={20} />
                <IconBrandYoutube size={20} />
            </div>
        </footer>
    );
};

export default Footer;