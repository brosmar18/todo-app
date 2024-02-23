import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { SettingsProvider } from '../../context/Settings';
import List from '.';
import { beforeAll } from 'vitest';

describe('List Component', () => {
    // Mock window.matchMedia before running the tests
    beforeAll(() => {
        window.matchMedia = vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), 
            removeListener: vi.fn(), 
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }));
    });

    const tasks = [
        { id: 1, text: 'Task 1', assignee: 'User 1', difficulty: 2, complete: false },
        { id: 2, text: 'Task 2', assignee: 'User 2', difficulty: 3, complete: true },
    ];

    const Wrapper = ({ children }) => (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <SettingsProvider>
                {children}
            </SettingsProvider>
        </MantineProvider>
    );

    it('should render the list with tasks', () => {
        render(<List tasks={tasks} />, { wrapper: Wrapper });

        const listElement = screen.getByTestId('list');
        expect(listElement).toBeInTheDocument();

        tasks.forEach((task, index) => {
            const taskElement = screen.getByTestId(`task-${index}`);
            expect(taskElement).toHaveTextContent(task.text);
            expect(taskElement).toHaveTextContent(task.assignee);
            expect(taskElement).toHaveTextContent(`Difficulty: ${task.difficulty}`);
            expect(taskElement).toHaveTextContent(`Complete: ${task.complete.toString()}`);
        });
    });

    it('should display pagination', () => {
        render(<List tasks={tasks} />, { wrapper: Wrapper });

        const paginationElement = screen.getByTestId('pagination');
        expect(paginationElement).toBeInTheDocument();
    });
});
