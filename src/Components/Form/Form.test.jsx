import { fireEvent, render, screen } from '@testing-library/react';
import Form from './index';
import { TasksProvider } from '../../context/TaskContext';

describe('Form', () => {
    test('renders Form components correctly', () => {
        render(
            <TasksProvider>
                <Form />
            </TasksProvider>
        );

        expect(screen.getByTestId('form-container')).toBeInTheDocument();
        expect(screen.getByTestId('form-title')).toHaveTextContent('Add Task');
        expect(screen.getByTestId('task-form')).toBeInTheDocument();
        expect(screen.getByTestId('task-input')).toBeInTheDocument();
        expect(screen.getByTestId('assignee-input')).toBeInTheDocument();
        expect(screen.getByTestId('difficulty-range')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    test('allows user to enter task details', () => {
        render(
            <TasksProvider>
                <Form />
            </TasksProvider>
        );

        fireEvent.change(screen.getByTestId('task-input'), { target: { value: 'New Task' } });
        expect(screen.getByTestId('task-input')).toHaveValue('New Task');

        fireEvent.change(screen.getByTestId('assignee-input'), { target: { value: 'John Doe' } });
        expect(screen.getByTestId('assignee-input')).toHaveValue('John Doe');

        fireEvent.change(screen.getByTestId('difficulty-range'), { target: { value: '3' } });
        expect(screen.getByTestId('difficulty-range')).toHaveValue('3');
    });

});
