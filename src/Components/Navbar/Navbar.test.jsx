import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '.';

describe('Navbar Component', () => {
    it('renders the navbar', () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('displays the logo', () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
    });

    it('has navigation links', () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByTestId('navbar-links')).toBeInTheDocument();
        ['home', 'tasks', 'calendar', 'account'].forEach((link) => {
            expect(screen.getByTestId(`navbar-link-${link}`)).toBeInTheDocument();
        });
    });

    it('shows the menu icon for mobile view', () => {
        render(<Navbar />, { wrapper: BrowserRouter });
        expect(screen.getByTestId('navbar-menu-icon')).toBeInTheDocument();
    });
});
