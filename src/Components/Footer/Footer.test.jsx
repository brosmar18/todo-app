import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer Component', () => {
    it('should render the footer', () => {
        render(<Footer />);
        const footerElement = screen.getByTestId('footer');
        expect(footerElement).toBeInTheDocument();
    });

    it('should display social icons', () => {
        render(<Footer />);
        const socialsElement = screen.getByTestId('footer-socials');
        expect(socialsElement).toBeInTheDocument();

        const instagramIcon = screen.getByTestId('icon-instagram');
        expect(instagramIcon).toBeInTheDocument();

        const twitterIcon = screen.getByTestId('icon-twitter');
        expect(twitterIcon).toBeInTheDocument();

        const youtubeIcon = screen.getByTestId('icon-youtube');
        expect(youtubeIcon).toBeInTheDocument();
    });
});
