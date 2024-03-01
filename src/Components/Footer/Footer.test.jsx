import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
    test('renders correctly', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
    });

    test('contains copyright text', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/to do app. all rights reserved/i);
        expect(copyrightText).toBeInTheDocument();
    });

    test('contains social media icons', () => {
        render(<Footer />);
        expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
        expect(screen.getByLabelText('YouTube')).toBeInTheDocument();
        expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    });

});
